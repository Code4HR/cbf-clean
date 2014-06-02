// these functions make the form work

Meteor.startup(function() {
  //validate form on client, then submit to server function logReport
  Regulate.form.onSubmit(function (error, data) {
    if (error) {
      // console.log("The error", error);
    } else {
      // console.log("The data", data);
      Meteor.call("logReport", data);
      Router.go("thankyou");
    }
  });
});

Template.form.partners = function () {
  return Partners.find({}, {sort: {name: 1}});
};

Template.form.displayMilesHelp = function () {
  return Session.get("milesHelp");
};

Template.form.displayPoundsHelp = function () {
  return Session.get("poundsHelp");
};


Template.form.events({

  "click .poundsHelp" : function () {
    Session.set("poundsHelp", true);
  },

  "click .closePoundsHelp" : function () {
    Session.set("poundsHelp", false);
  },

  "click .milesHelp" : function () {
    Session.set("milesHelp", true);
  },

  "click .closeMilesHelp" : function () {
    Session.set("milesHelp", false);
  },

  "click .cancel" : function () {
    Router.go("welcome");
  }
});
