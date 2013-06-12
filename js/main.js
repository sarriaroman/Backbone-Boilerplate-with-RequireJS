require.config({
  urlArgs: "bust=" + (new Date()).getTime(), // Just for Development
  paths: {
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    localStorage: 'libs/localStorage/backbone.localStorage',
    text: 'libs/backbone/text',
    templates: '../templates'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'localStorage': {
      deps: ['backbone'],
      exports: 'localStorage'
    },
    'underscore': {
      exports: '_'
    },
    'jquery': {
      exports: '$'
    },
  }
});

require([ 'app' ], function(App) {
  App.initialize();
});