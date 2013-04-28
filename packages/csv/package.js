Package.describe({
  summary: "Parse and create CSV"
});

Npm.depends({csv: "0.3.0"});

csv = Npm.require("csv");

Package.on_use(function (api) {
  api.add_files("csv.js", "server");
});
