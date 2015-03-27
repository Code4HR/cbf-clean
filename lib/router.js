// creates routes between pages

// default header/footer for all routes
Router.configure({
  layoutTemplate: "layout"
});

// scroll to top of page on loading a new route
// particually important on mobile when they hit submit on form
// doesn't work in all broswers
Router.onAfterAction(function() {
  $("body,html").scrollTop(0);
});

Router.route("/", function () {
  this.render("welcome");
});

Router.route("/report", function () {
  this.render("report");
});

Router.route("/form", function () {
  this.render("form");
});

Router.route("/thankyou", function () {
  this.render("thankyou");
});

Router.onRun(function() {
  Session.set("reportActive", true);
  Session.set("formActive", false);
  this.next();
}, {only: "report"});

Router.onRun(function() {
  Session.set("formActive", true);
  Session.set("reportActive", false);
  this.next();
}, {only: "form"});

Router.onRun(function() {
  Session.set("formActive", false);
  Session.set("reportActive", false);
  this.next();
}, {except: ["form", "report"]});
