Partners = new Meteor.Collection("partners");
ZoneReports = new Meteor.Collection("zoneReports");

ZoneReports.allow({
  insert : function () { return true; }
});

ZoneReports.deny({
  update : function () { return true; },
  remove : function () { return true; }
});

if (Meteor.isServer) {
  // load up path to static files
  var path = Npm.require('path');
  var fs = Npm.require('fs');
  var base = path.resolve('.');
  var isBundle = (fs.existsSync(base + '/bundle') || fs.existsSync(base + '/static'));
  var publicPath = base + (isBundle ? '/bundle/static' : '/public');
  if (process.env.NODE_ENV === 'production') {
    // if in Modulus.io
    publicPath = (base + '/static');
  }
  // start an observer on the ZoneReports Collection
  // this takes the listed columns from the DB and puts in csv file on every
  // startup or every write to the collection in DB
  // var query = ZoneReports.find({}, {sort: {partner: 1}});
  // var handle = query.observe({
  //   added: function () {
  //     var reports = ZoneReports.find({}, {}).fetch();
  //     exportCsv.doit(reports, publicPath);
  //   }
  // });
}
