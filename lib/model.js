Partners = new Meteor.Collection("partners");
ZoneReports = new Meteor.Collection("zoneReports");

ZoneReports.allow({
  insert : function () { return true; }
});

ZoneReports.deny({
  update : function () { return true; },
  remove : function () { return true; }
});
