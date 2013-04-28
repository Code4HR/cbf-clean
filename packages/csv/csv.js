csvf = Npm.require("csv");

exportCsv = {
  // takes input and sticks in csv text file
  // @param reports {Object} array or obj of data
  // @param publicPath {String} server path to store csv
  doit: function (reports, publicPath) {
    csvf().from(reports).to(publicPath + "/export.csv", {
      columns: [
        "zoneCaptain",
        "partner",
        "zone",
        "volunteers",
        "poundsCollected",
        "milesCleaned",
        "mostUnusualItem",
        "mostCommonItem",
        "largestItem",
        "activeMilitary",
        "boats",
        "trashPickup",
        "picnic"],
      header: true
    });
  }
};

