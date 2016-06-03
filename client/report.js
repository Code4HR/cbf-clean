// calculate totals for report data
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

Template.report.helpers({
  // return Partners.find({}, {sort: {name: 1}});
  partners : function () {
    return Partners.find();
  },

  moreDetail : function () {
    return Session.get("moreDetail");
  }
});

Template.reportDetail.helpers({
  reports : function () {
    // var partnerSelected = Session.get("partnerSelected");
    // var reports;
    // if (partnerSelected === "All") {
    reports = ZoneReports.find({}, {sort: {"createdAt": -1}});
    // } else {
    //   reports = ZoneReports.find({"partner": partnerSelected}, {sort: {"createdAt": -1}});
    // }
    totals(reports);
    return reports;
  },

  moreDetail : function () {
    return Session.get("moreDetail");
  },

  totalReports : function () {
    return Session.get("totalReports");
  },

  totalVolunteers : function () {
    return Session.get("totalVolunteers");
  },

  totalPounds : function () {
    return Session.get("totalPounds");
  },

  totalMiles : function () {
    return Session.get("totalMiles");
  }
});

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
  },
  'click .download': function (e) {
    csv = json2csv(ZoneReports.find({}, {fields: {email: 0, phone: 0, _id:0}}).fetch(), true, true);
    e.target.href = "data:text/csv;charset=utf-8," + escape(csv);
    e.target.download = "ctbd2015reports.csv";
  }
});
