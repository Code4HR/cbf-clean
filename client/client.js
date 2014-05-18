
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
    if (report.poundsCollected.replace(/[^\d\.\-\ ]/g, "") > 0) totalPounds += parseFloat(report.poundsCollected.replace(/[^\d\.\-\ ]/g, ""), 0);
    if (report.milesCleaned.replace(/[^\d\.\-\ ]/g, "") > 0) totalMiles += parseFloat(report.milesCleaned.replace(/[^\d\.\-\ ]/g, ""), 0);
  });
  Session.set("totalReports", totalReports);
  Session.set("totalVolunteers", totalVolunteers);
  Session.set("totalPounds", totalPounds.toFixed(1));
  Session.set("totalMiles", totalMiles.toFixed(1));
};

Template.navbar.formActive = function () {
  if (Session.get("formActive")) {
    return "active";
  }
};

Template.navbar.reportActive = function () {
  if (Session.get("reportActive")) {
    return "active";
  }
};

Template.report.partners = function () {
  return Partners.find({}, {sort: {name: 1}});
};

Template.reportDetail.totalReports = function () {
  return Session.get("totalReports");
};

Template.reportDetail.totalVolunteers = function () {
  return Session.get("totalVolunteers");
};

Template.reportDetail.totalPounds = function () {
  return Session.get("totalPounds");
};

Template.reportDetail.totalMiles = function () {
  return Session.get("totalMiles");
};

Template.report.moreDetail = function () {
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
  // console.log(this.name);
  if (this.name === Session.get("partnerSelected")) {
    console.log(this.name + " " + Session.get("partnerSelected") + " selected");
    return "selected";
  }
};

Template.report.events({
  'change .select-partner' : function () {
    var partner = document.getElementById("partner").value;
    //this is to support IE7/8
    if (! partner.length) {
      p = document.getElementById("partner");
      partner = p.options[p.selectedIndex].text;
    }
    Session.set("partnerSelected", partner);
  },

  'click .btn-more' : function () {
    Session.set("moreDetail", true);
  },

  'click .btn-less' : function () {
    Session.set("moreDetail", false);
  }
});
