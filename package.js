Package.describe({
  name: 'robsecord:tempus-dominus-bs3',
  version: '0.0.1',
  summary: 'Meteor Wrapper for Tempus Dominus - Bootstrap 3 - v5 Alpha',
  git: 'https://github.com/robsecord/tempus-dominus-bs3.git',
  documentation: 'README.md'
});

Npm.depends({
    "moment": "2.17.1",
    "moment-timezone": "0.5.10"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('ecmascript');

  api.addFiles([
      '.npm/package/node_modules/moment/min/moment-with-locales.js',
      '.npm/package/node_modules/moment-timezone/builds/moment-timezone-with-data.js',
      'tempusdominus-core.js',
      'tempusdominus-bootstrap-3.js',
      'tempusdominus-bootstrap-3.css'
  ], 'client');
});
