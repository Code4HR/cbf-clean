// Mesosphere({
//   name: "zone-report",
//   method: "",
//   template: "",
//   fields: {
//     zoneCaptain: {
//       required: true,
//       message: "Enter your name",
//       rules: {
//         minLength: 3
//       }
//     },
//     partner: {
//       required: true
//     },
//     zone: {
//
//     },
//     volunteers: {
//       required: true
//     },
//     poundsCollected: {
//       required: true
//     },
//     milesCleaned: {
//       required: true
//     }
//   }
// });

Meteor.startup(function() {
  Regulate.form.onSubmit(function (error, data) {
    if (error) {
      console.log('Client-side validation failed.');
      console.log('The error', error);
    } else {
      console.log('Client-side validation passed!');
      console.log('The data', data);
      Meteor.call('register', data);
    }
  });
});


Template.form.partners = function () {
  return Partners.find({}, {sort: {name: 1}});
};

Template.form.rendered = function () {
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

// Template.form.events({
//
//   'click .cancel' : function () {
//     Router.go("welcome");
//   },
//
//   'click .save' : function (event, template) {
//     // var validationObject = Mesosphere.zone-report.validate(rawFormData);
//
//     var partner = document.getElementById("partner").value;
//     //this is to support IE7/8
//     if (! partner.length) {
//       p = document.getElementById("partner");
//       partner = p.options[p.selectedIndex].text;
//     }
//
//     ZoneReports.insert({
//       zoneCaptain: document.getElementById("zoneCaptain").value,
//       partner: partner,
//       zone: document.getElementById("zone").value,
//       volunteers: document.getElementById("volunteers").value,
//       poundsCollected: document.getElementById("poundsCollected").value.replace(/[^\d\.\-\ ]/g, ""),
//       milesCleaned: document.getElementById("milesCleaned").value.replace(/[^\d\.\-\ ]/g, ""),
//       mostUnusualItem: document.getElementById("mostUnusualItem").value,
//       mostCommonItem: document.getElementById("mostCommonItem").value,
//       largestItem: document.getElementById("largestItem").value,
//       activeMilitary: document.getElementById("activeMilitary").value,
//       boats: document.getElementById("boats").value,
//       trashPickup: document.getElementById("trashPickup").checked,
//       createdAt: new Date()
//     });
//
//     Router.go("thankyou");
//   }
// });
