// // load up path to static files
// var path = Npm.require('path');
// var fs = Npm.require('fs');
// var base = path.resolve('.');
// var isBundle = (fs.existsSync(base + '/bundle') || fs.existsSync(base + '/static'));
// var publicPath = base + (isBundle ? '/bundle/static' : '/public');
// if (process.env.NODE_ENV === 'production') {
//   // if in Modulus.io
//   publicPath = (base + '/static');
// }
// // start an observer on the ZoneReports Collection
// // this takes the listed columns from the DB and puts in csv file on every
// // startup or every write to the collection in DB
// var query = ZoneReports.find();
// var handle = query.observe({
//   added: function () {
//     var reports = ZoneReports.find({}, {}).fetch();
//     CSV.generate(reports, publicPath);
//   }
// });

//Using the Router package to create a route, passing the response stream to our function
// curl http://localhost:3000/exportUsers/Users.csv
// Should get a .csv file
Router.map(function () {
  this.route('export', {
    path: '/export/:filename',
    data: function() { return exportCSV(this.response); }
  });
});

var exportCSV = function(responseStream){

   var userStream = createStream();
    // Set up a future, Stream doesn't work properly without it.
    var fut = new Future();
    var users = {};

    //Here this Package is used to parse a stream from an array to a string of CSVs.
   CSV().from(userStream)
    .to(responseStream)
    .transform(function(user, index){
    if(user._id){
        var dateCreated = new Date(user.createdAt);
        return [user.profile.name, user.emails[0].address, dateCreated.toString()];
    }else
        return user;
    })
    .on('error', function(error){
        log.error('Error streaming CSV export: ', error.message);
    })
    .on('end', function(count){
        responseStream.end();
        fut.ret();
    });

    //Write table headings for CSV to stream.
    userStream.write(["Name", "Email", "Date Created"]);

    users = Users.find({});

    //Pushing each user into the stream, If we could access the MongoDB driver we could
    //convert the Cursor into a stream directly, making this a lot cleaner.
    users.forEach(function (user) {
        userStream.write(user); //Stream transform takes care of cleanup and formatting.
        count += 1;
        if(count >= users.count())
            userStream.end();
    });

    return fut.wait();
};

//Creates and returns a Duplex(Read/Write) Node stream
//Used to pipe users from .find() Cursor into our CSV stream parser.
var createStream = function(){
    var stream = Npm.require('stream');
    var myStream = new stream.Stream();
    myStream.readable = true;
    myStream.writable = true;

    myStream.write = function (data) {
        myStream.emit('data', data);
        return true; // true means 'yes i am ready for more data now'
        // OR return false and emit('drain') when ready later
    };

    myStream.end = function (data) {
        //Node convention to emit last data with end
        if (arguments.length)
            myStream.write(data);

        // no more writes after end
        myStream.writable = false;
        myStream.emit('end');
    };

    myStream.destroy = function () {
        myStream.writable = false;
    };

    return myStream;
};
