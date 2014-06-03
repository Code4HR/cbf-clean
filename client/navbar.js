// controls navbar state
Template.navbar.formActive = function () {
  if (Session.get("formActive")) {
    return "active";
  }
};

// controls navbar state
Template.navbar.reportActive = function () {
  if (Session.get("reportActive")) {
    return "active";
  }
};
