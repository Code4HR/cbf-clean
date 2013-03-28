
// If no partner selected, select none. Remember selection.
Meteor.startup(function () {
  Meteor.autorun(function () {
    if (! Session.get("partnerSelected")) {
      Session.set("partnerSelected", "All");
    }
  });
});

var totals = function (reports) {
  var totalReports = 0;
  var totalVolunteers = 0;
  var totalPounds = 0;
  var totalMiles = 0;
  reports.forEach(function (report) {
    totalReports ++;
    if (report.volunteers > 0) totalVolunteers += parseInt(report.volunteers, 0);
    if (report.poundsCollected > 0) totalPounds += parseInt(report.poundsCollected, 0);
    if (report.milesCleaned > 0) totalMiles += parseInt(report.milesCleaned, 0);
  });
  Session.set("totalReports", totalReports);
  Session.set("totalVolunteers", totalVolunteers);
  Session.set("totalPounds", totalPounds);
  Session.set("totalMiles", totalMiles);
};

Template.page.hideHello = function () {
  return Session.get("hideHello");
};

Template.page.showThankYou = function () {
  return Session.get("showThankYou");
};

Template.page.showZoneForm = function () {
  return Session.get("showForm");
};

Template.page.showReportMain = function () {
  return Session.get("showReportMain");
};

Template.navbar.navReportActive = function () {
  return Session.get("navReportActive");
};

Template.zoneForm.partners = function () {
  return Partners.find({}, {sort: {name: 1}});
};

Template.reportMain.partners = function () {
  return Partners.find({}, {sort: {name: 1}});
};

Template.reportMain.totalReports = function () {
  return Session.get("totalReports");
};

Template.reportMain.totalVolunteers = function () {
  return Session.get("totalVolunteers");
};

Template.reportMain.totalPounds = function () {
  return Session.get("totalPounds");
};

Template.reportMain.totalMiles = function () {
  return Session.get("totalMiles");
};

Template.reportMain.moreDetail = function () {
  return Session.get("moreDetail");
};

Template.reportDetail.reports = function () {
  var partnerSelected = Session.get("partnerSelected");
  var reports;
  if (partnerSelected === "All") {
    reports = ZoneReports.find({}, {sort: {"createdAt": -1}});
  } else {
    reports = ZoneReports.find({"partner": partnerSelected}, {sort: {"createdAt": -1}});
  }
  totals(reports);
  return reports;
};

Template.reportDetail.moreDetail = function () {
  return Session.get("moreDetail");
};

Template.partner.selected = function () {
  if (this.name === Session.get("partnerSelected")) {
    return "selected";
  }
};

Template.navbar.events({
  'click .btn-reporting' : function () {
    Session.set("showReportMain", true);
    Session.set("showThankYou", false);
    Session.set("navReportActive", true);
    Session.set("showForm", false);
    Session.set("hideHello", true);
  },

  'click .btn-dashboard' : function () {
    Session.set("showReportMain", false);
    Session.set("showThankYou", false);
    Session.set("navReportActive", false);
    Session.set("showForm", false);
    Session.set("hideHello", false);
  }
});

Template.reportMain.events({
  'change .select-partner' : function () {
    Session.set("partnerSelected", document.getElementById("partner").value);
  },

  'click .btn-more' : function () {
    Session.set("moreDetail", true);
  },

  'click .btn-less' : function () {
    Session.set("moreDetail", false);
  }
});

Template.thankYouBanner.events({
  'click .btn' : function () {
    Session.set("showThankYou", false);
    Session.set("hideHello", false);
  }
});

Template.heroBanner.events({
  'click .btn' : function () {
    Session.set("showForm", true);
    Session.set("hideHello", true);
  }
});

Template.zoneForm.events({

  'click .cancel' : function () {
    Session.set("showForm", false);
    Session.set("hideHello", false);
  },

  'click .save' : function () {
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
    Session.set("showThankYou", true);
    Session.set("showForm", false);
  }

});
