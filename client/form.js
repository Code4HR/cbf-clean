// these functions make the form work

Meteor.startup(function() {
  //validate form on client, then submit to server function logReport
  Regulate.form.onSubmit(function (error, data) {
    if (error) {
       console.log("The error", error);
    } else {
       console.log("The data", data);
      Meteor.call("logReport", data);
      Router.go("thankyou");
    }
  });
});

Template.form.helpers({
  partners : function () {
     return Partners.find({}, {sort: {name: 1}});
    //return Partners.find();
  },

  displayMilesHelp : function () {
    return Session.get("milesHelp");
  },

  displayPoundsHelp : function () {
    return Session.get("poundsHelp");
  }
});

Template.form.events({

  "click .poundsHelp" : function (e, t) {
    e.preventDefault();
    Session.set("poundsHelp", true);
  },

  "click .closePoundsHelp" : function (e, t) {
    e.preventDefault();
    Session.set("poundsHelp", false);
  },

  "click .milesHelp" : function (e, t) {
    e.preventDefault();
    Session.set("milesHelp", true);
  },

  "click .closeMilesHelp" : function (e, t) {
    e.preventDefault();
    Session.set("milesHelp", false);
  },

  "click .cancel" : function () {
    Router.go("welcome");
  }
});
