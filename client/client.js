
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

Template.zoneForm.rendered = function () {
  $('#poundsCollected').popover({
    title: "Estimated weidghts for debris collected",
    html: true,
    trigger: "focus",
    placement: "right",
    content: "Automobile parts:25 lbs.<br/>Metal container:50 lbs.<br/>Bag of litter:15-25 lbs.<br/>Wooden pallet:30 lbs.<br/>Bag of clothes:30 lbs.<br/>Refrigerator:500 lbs.<br/>Bicycle:25 lbs.<br/>Shopping cart:50-60 lbs.<br/>Chair:25 lbs.<br/>Sofa:80 lbs.<br/>Dishwasher:75 lbs.<br/>TV/Computer:15 lbs.<br/>Dresser:50 lbs.<br/>Tire:25-50 lbs.<br/>Mattress:25 lbs."
  });
  $('#milesCleaned').popover({
    title: "Estimating Distance to be Cleaned",
    html: true,
    trigger: "focus",
    placement: "right",
    content: "Estimate the longest linear length (i.e., from point A to point B along the beach/shore) to be cleaned by the volunteers. Do not report area measurements, such as square feet/miles. Use the following method to convert area measurements to linear distances: Number of square feet cleaned divided by 10 ft.* divided by 5280 ft. (1 mile) = linear miles cleaned *10 feet represents an average linear path cleaned by a volunteer (5 feet on each side of the person)<br/><br/>Example 1: You plan to clean a 1-acre area. 1 acre = 43,560 ft2 43,560 ÷ 10 ÷ 5280 = 0.825 miles cleaned<br/><br/> Example 2: You plan to clean 5000 ft2 . 5000 ÷ 10 ÷ 5280 = 0.094 miles"
  });
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
  // console.log(this.name);
  if (this.name === Session.get("partnerSelected")) {
    console.log(this.name + " " + Session.get("partnerSelected") + " selected");
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

  'click .save' : function (event, template) {
    var partner = document.getElementById("partner").value;
    //this is to support IE7/8
    if (! partner.length) {
      p = document.getElementById("partner");
      partner = p.options[p.selectedIndex].text;
    }
    ZoneReports.insert({
      zoneCaptain: document.getElementById("zoneCaptain").value,
      partner: partner,
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
      createdAt: new Date()
    });
    Session.set("showThankYou", true);
    Session.set("showForm", false);
  }

});
