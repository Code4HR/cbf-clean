Partners = new Meteor.Collection("partners");
ZoneReports = new Meteor.Collection("zoneReports");

ZoneReports.allow({
  insert : function () { return true; }
});

ZoneReports.deny({
  update : function () { return true; },
  remove : function () { return true; }
});

if (Meteor.isClient) {

///////////////////////////////////////////////////////////////////////////////
// Create Report dialog

var openCreateDialog = function () {
  Session.set("showCreateDialog", true);
};

var closeCreateForm = function () {
  Session.set("showCreateDialog", false);
};

var reportMainOpen = function () {
  Session.set("showCreateDialog", false);
  Session.set("showReportMain", true);
  Session.set("navReportActive", true);
};

var reportMainClosed = function () {
  Session.set("showReportMain", false);
  Session.set("navReportActive", false);
  Session.set("showCreateDialog", false);
};

Template.hello.showCreateDialog = function () {
  return Session.get("showCreateDialog");
};

Template.page.showReportMain = function () {
  return Session.get("showReportMain");
};

Template.navbar.navReportActive = function () {
  return Session.get("navReportActive");
};

Template.createDialog.partners = function () {
  return Partners.find({}, {sort: {name: 1}});
};

Template.reportMain.partners = function () {
  return Partners.find({}, {sort: {name: 1}});
};

Template.reportDetail.reports = function () {
  return ZoneReports.find({}, {sort: {partner: 1}});
};

Template.reportDetail.moreDetail = function () {
  return Session.get("moreDetail");
};

Template.reportMain.moreDetail = function () {
  return Session.get("moreDetail");
};

Template.navbar.events({
  'click .btn-reporting' : function () {
    reportMainOpen();
    console.log("clicked reports button");
  },

  'click .btn-dashboard' : function () {
    reportMainClosed();
    console.log("clicked dashboard button");
  }
});

Template.reportMain.events({
  'change .select-partner' : function () {
    console.log("selected new partner");
  },

  'click .btn-more' : function () {
    Session.set("moreDetail", true);
  },

  'click .btn-less' : function () {
    Session.set("moreDetail", false);
  },

});

Template.hello.events({
  'click .btn-large' : function () {
    openCreateDialog();
  }
});

Template.createDialog.events({

  'click .cancel' : function () {
    closeCreateForm();
  },

  'click .save' : function () {
    // template data, if any, is available in 'this'
    if (document.getElementById("trashPickup"))

    if (typeof console !== 'undefined') {  // why do I do this first? TODO: check usage
      console.log("You pressed the button");
      console.log("captain : " + document.getElementById("zoneCaptain").value);
      console.log("trash pickup : " + document.getElementById("trashPickup").checked);
      console.log("picnic : " + document.getElementById("picnic").checked);
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
        trashPickup: document.getElementById("trashPickup").checked,
        picnic: document.getElementById("picnic").checked,
        createdAt: new Date()
      });
    }
    //TODO: tell them thank you!!
    closeCreateForm();

    }
  });
}

