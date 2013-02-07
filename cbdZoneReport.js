Partners = new Meteor.Collection("partners");
ZoneReports = new Meteor.Collection("zoneReports");

if (Meteor.isClient) {

///////////////////////////////////////////////////////////////////////////////
// Create Report dialog

  var openCreateDialog = function () {
  Session.set("createError", null);
  Session.set("showCreateDialog", true);
};

Template.hello.showCreateDialog = function () {
  return Session.get("showCreateDialog");
};

Template.createDialog.error = function () {
  return Session.get("createError");
};

///////////////////////////////////////////////////////////////////////////////
// form filling

  Template.createDialog.partners = function () {
    return Partners.find({}, {sort: {name: 1}});
  };

Template.hello.zoneReports = function () {
    return ZoneReports.find({}, {sort: {zoneCaptain: 1}});
  };

Template.hello.events({
  'click .btn-large' : function () {
    openCreateDialog();
  }
});

Template.createDialog.events({
  'click .save' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
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
  });
}

