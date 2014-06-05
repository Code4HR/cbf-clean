// If no partner selected, select none. Remember selection.
Meteor.startup(function () {
  Meteor.autorun(function () {
    if (! Session.get("partnerSelected")) {
      Session.set("partnerSelected", "All");
    }
  });
});

Template.partner.selected = function () {
  // console.log(this.name);
  if (this.name === Session.get("partnerSelected")) {
    // console.log(this.name + " " + Session.get("partnerSelected") + " selected");
    return "selected";
  }
};
