Partners = new Meteor.Collection("partners");
ZoneReports = new Meteor.Collection("zoneReports");

if (Meteor.isClient) {

///////////////////////////////////////////////////////////////////////////////
// Create Zone Report Form


Template.page.iWantAddZoneReport = function () {
  return Session.get("iWantAddZoneReport");
};

Template.showZoneReportButton.events({
  'click .zone-report' : function () {
    openZoneReportForm();
    console.log("clicked zone reports button");
  }
});

var openZoneReportForm = function () {
  Session.set("iWantAddZoneReport", true);
  console.log("ran the function");
};

var closeZoneReportForm = function () {
  Session.set("showZoneReportForm", false);
  Session.set("showZoneReportButton", true);
  };

Template.showZoneReportForm.partners = function () {
  return Partners.find({}, {sort: {name: 1}});
};

Template.showZoneReportForm.events({
  'click .save' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined') {  //why do I do this first?
      console.log("You pressed submit");
      console.log(document.getElementById("zoneCaptain").value);
      ZoneReports.insert({
                zoneCaptain: document.getElementById("zoneCaptain").value,
                partner: document.getElementById("partner").value,
                zone: document.getElementById("zone").value,
                volunteers: document.getElementById("volunteers").value,
                poundsCollected: document.getElementById("poundsCollected").value,
                milesCleaned: document.getElementById("milesCleaned").value,
                mostUnusualItem: document.getElementById("mostUnusualItem").value,
                mostCommonItem: document.getElementById("mostCommonItem").value,
                largestItem: document.getElementById("largestItem").value,
                activeMilitary: document.getElementById("activeMilitary").value,
                boats: document.getElementById("boats").value,
                trashPickup: document.getElementById("trashPickup").value,
                picknic: document.getElementById("picknic").value
      });
    }
    closeZoneReportForm();
    }
  });
}
