Package.describe({
  name: 'gaetanrouzies:bootstrap-4-modal',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'Simply open and hide bootstrap 4 modals in Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/GaetanRouzies/bootstrap-4-modal',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.7');
  api.use('ecmascript');
  api.mainModule('bootstrap-4-modal.js', 'client');
});