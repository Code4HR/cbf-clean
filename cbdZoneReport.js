Partners = new Meteor.Collection("partners");
ZoneReports = new Meteor.Collection("zoneReports");

if (Meteor.isClient) {

///////////////////////////////////////////////////////////////////////////////
// Create Report dialog

  var openCreateDialog = function () {
  Session.set("showCreateDialog", true);
  Session.set("showReportButton", false);
};

  var closeCreateForm = function () {
    Session.set("showCreateDialog", false);
    Session.set("showReportButton", true);
  };

var reportsMainOpen = function () {
    Session.set("showCreateDialog", false);
    Session.set("showReportButton", false);
    Session.set("showHelloMain", false);
}

Template.hello.showHelloMain = function () {
  return Session.get("hello");
}

Template.hello.showCreateDialog = function () {
  return Session.get("showCreateDialog");
};

Template.hello.showReportButton = function () {
  return Session.get("showReportButton");
}



Template.createDialog.partners = function () {
  return Partners.find({}, {sort: {name: 1}});
};

Template.reportMain.partners = function () {
  return Partners.find({}, {sort: {name: 1}});
};  



  Template.createDialog.closeCreateForm = function () {
    return Session.get("closeCreateForm");
  };

Template.hello.zoneReports = function () {
    return ZoneReports.find({}, {sort: {zoneCaptain: 1}});
  };

Template.navbar.events({
  'click .btn-reporting' : function () {
    reportsMainOpen();
    console.log("clicked reports button");
  }
})

Template.hello.events({
  'click .btn-large' : function () {
    openCreateDialog();
  }
});

Template.createDialog.events({
  'click .save' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined') {  //why do I do this first?
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
    closeCreateForm();
    }
  });
}

