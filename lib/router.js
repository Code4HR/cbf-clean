// creates routes between pages

// default header/footer for all routes
Router.configure({
  layoutTemplate: "layout"
});

// scroll to top of page on loading a new route
// particually important on mobile when they hit submit on form
// doesn't work in all broswers
Router.onAfterAction(function() {
  $('body,html').scrollTop(0);
});

Router.map(function() {
  this.route("welcome", {path: "/"});
  this.route("report");
  this.route("form");
  this.route("thankyou");
});

Router.onRun(function() {
  Session.set("reportActive", true);
  Session.set("formActive", false);
}, {only: "report"});

Router.onRun(function() {
  Session.set("formActive", true);
  Session.set("reportActive", false);
}, {only: "form"});

Router.onRun(function() {
  Session.set("formActive", false);
  Session.set("reportActive", false);
}, {except: ["form", "report"]});
