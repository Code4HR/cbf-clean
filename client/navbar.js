// controls navbar state
Template.navbar.helpers({

  formActive : function () {
    if (Session.get("formActive")) {
      return "active";
    }
  },

  // controls navbar state
  reportActive : function () {
    if (Session.get("reportActive")) {
      return "active";
    }
  }
});
