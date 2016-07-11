Package.describe({
  name: "lusch:nova-i18n-pl-pl",
  summary: "Telescope i18n package (pl_PL)",
  version: "0.26.3-nova",
  git: "https://github.com/schabluk/i18n-pl-pl.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'nova:core@0.26.3-nova'
  ]);

  api.addFiles([
    'lib/pl_PL.js'
  ], ["client", "server"]);
});
