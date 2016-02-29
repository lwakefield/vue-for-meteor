Package.describe({
  name: 'lwakefield:vue',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Simple binding to Vue.js for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lwakefield/vue-for-meteor',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles('vue/dist/vue.js');
});

Package.onTest(function(api) {
});
