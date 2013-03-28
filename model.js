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
  // load up cvs npm module
  var require = __meteor_bootstrap__.require;
  var path = require('path');
  var fs = require('fs');
  var base = path.resolve('.');
  var isBundle = fs.existsSync(base + '/bundle');
  var publicPath = base + (isBundle ? '/bundle/static' : '/public');
  var modulePath = publicPath + '/node_modules';
  var csv = require(modulePath + '/csv');

  // start an observer on the ZoneReports Collection
  // this takes the listed columns from the DB and puts in csv file on every
  // startup or every write to the collection in DB
  var query = ZoneReports.find({}, {sort: {partner: 1}});
  var handle = query.observe({
    added: function () {
      var reports = ZoneReports.find({}, {}).fetch();
      csv().from(reports).to(publicPath + "/export.csv", {
        columns: [
          "zoneCaptain",
          "partner",
          "zone",
          "volunteers",
          "poundsCollected",
          "milesCleaned",
          "mostUnusualItem",
          "mostCommonItem",
          "largestItem",
          "activeMilitary",
          "boats",
          "trashPickup",
          "picnic"],
        header: true
      });
    }
  });
}
