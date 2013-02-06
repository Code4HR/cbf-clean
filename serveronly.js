if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    // if (Partners.find().count() === 0) {
      Partners.remove({});
      var names = ["Virginia Beach",
                      "Norfolk",
                      "Newport News",
                      "Hampton",
                      "Portsmouth",
                      "-NOT LISTED? (oops, add in zone field)",
                      "Suffolk",
                      "--Choose Your City--"];
      for (var i = 0; i < names.length; i++)
        Partners.insert({name: names[i]});
    // }
  });
}