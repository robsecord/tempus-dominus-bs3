Package.describe({
  name: 'robsecord:tempus-dominus-bs3',
  version: '0.0.1',
  summary: 'Meteor Wrapper for Tempus Dominus - Bootstrap 3 - v5 Alpha',
  git: 'https://github.com/robsecord/tempus-dominus-bs3.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('ecmascript');

  api.addFiles('tempusdominus-core.js', 'client');
  api.addFiles('tempusdominus-bootstrap-3.js', 'client');
  api.addFiles('tempusdominus-bootstrap-3.css', 'client');
});
