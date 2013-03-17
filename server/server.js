
if (Meteor.isServer) {
  Meteor.startup(
    function () {
    // code to run on server at startup
    // if (Partners.find().count() === 0) {
      Partners.remove({});
      var names = ["Caring For Creation ",
      "CBF-Chesterfield/Richmond Area Site",
      "CBF-Oyster/Eastern Shore Site",
      "City of Chesapeake",
      "City of Newport News",
      "City of Norfolk (Keep Norfolk Beautiful)",
      "City of Poquoson",
      "City of Portsmouth",
      "City of Suffolk",
      "City of Virginia Beach",
      "Gloucester County",
      "Hampton Bay Days",
      "Hampton Clean City Commission",
      "HRSD Employees Association",
      "James City County (J4C)",
      "Manassas City Bay Clean-Up",
      "Mattaponi & Pamunkey Rivers Association ",
      "Navy - Craney Island (Navy Portion - Fuel Depot) ",
      "Navy - JEB Fort Story ",
      "Navy - JEB Little Creek ",
      "Navy - Lafayette River Annex ",
      "Navy - NAS Oceana/NAS Oceana Dam Neck Annex ",
      "Navy - Naval Medical Center Portsmouth",
      "Navy - Naval Station Norfolk (NSN)",
      "Navy - New Kent ROTHR Site ",
      "Navy - Norfolk Naval Shipyard ",
      "Navy - NSA Norfolk ",
      "Navy - NWS Yorktown ",
      "Navy CTBD Regional Coordinator",
      "Port of Virginia",
      "Reston Association",
      "Rivanna Conservation Society",
      "Smithfield Packing Co._Isle of Wight",
      "SP - Andy Guest/Shenandoah River State Park ",
      "SP - Belle Isle SP",
      "SP - Chippokes Plantation State Park ",
      "SP - Douthat State Park ",
      "SP - False Cape State Park (part of VB)",
      "SP - James River State Park ",
      "SP - Kiptopeke SP",
      "SP - Leesylvania State Park ",
      "SP - Twin Lakes State Park ",
      "SP - Westmoreland State Park ",
      "SP - York River SP",
      "Tangier Pride, Inc. ",
      "The Nature Conservancy",
      "Town of Shenandoah",
      "VA Clean Marina Program",
      "VA Dept. of Conservation and Recreation ",
      "Vinings Marine Group",
      "Virginia Eastern Shore Land Trust",
      "York County Waterways Alliance",
                      "--Choose Your Partner Org--"];
      for (var i = 0; i < names.length; i++)
        Partners.insert({name: names[i]});

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
        }});

  });
}