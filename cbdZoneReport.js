Partners = new Meteor.Collection("partners");
ZoneReports = new Meteor.Collection("zoneReports");

if (Meteor.isClient) {
  Template.hello.partners = function () {
    return Partners.find({}, {sort: {name: 1}});
  };

Template.hello.zoneReports = function () {
    return ZoneReports.find({}, {sort: {zoneCaptain: 1}});
  };

  Template.hello.events({
    'click input.btn' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        // console.log("You pressed the button");
        // console.log(document.getElementById("zoneCaptain").value);
        // console.log(document.getElementById("partner").value);
        // console.log(document.getElementById("zone").value);
        // console.log(document.getElementById("volunteers").value);
        // console.log(document.getElementById("activeMilitary").value);
        // console.log(document.getElementById("boats").value);
        // console.log(document.getElementById("poundsCollected").value);
        // console.log(document.getElementById("milesCleaned").value);
        // console.log(document.getElementById("mostUnusualItem").value);
        // console.log(document.getElementById("mostCommonItem").value);
        // console.log(document.getElementById("largestItem").value);
        // console.log(document.getElementById("trashPickup").value);
        // console.log(document.getElementById("picknic").value);
        ZoneReports.insert({
                  zoneCaptain: document.getElementById("zoneCaptain").value,
                  partner: document.getElementById("partner").value,
                  zone: document.getElementById("zone").value,
                  volunteers: document.getElementById("volunteers").value,
                  activeMilitary: document.getElementById("activeMilitary").value,
                  boats: document.getElementById("boats").value,
                  poundsCollected: document.getElementById("poundsCollected").value,
                  milesCleaned: document.getElementById("milesCleaned").value,
                  mostUnusualItem: document.getElementById("mostUnusualItem").value,
                  mostCommonItem: document.getElementById("mostCommonItem").value,
                  largestItem: document.getElementById("largestItem").value,
                  trashPickup: document.getElementById("trashPickup").value,
                  picknic: document.getElementById("picknic").value
        });
    }
  });
}

