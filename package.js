Package.describe({
  name: 'firrae:meteor-react-bootstrap-datetimepicker',
  version: '0.0.1',
  summary: 'A simple react component for a Bootstrap themed DateTime Picker.',
  git: 'https://github.com/smalot/bootstrap-datetimepicker',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('fortawesome:fontawesome');
  api.addFiles([
    'js/bootstrap-datetimepicker.min.js',
    'css/bootstrap-datetimepicker.css',
    'react-bootstrap-datetimepicker.jsx'
  ], 'client');
  api.export('DateTimePicker');
});
