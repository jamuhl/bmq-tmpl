// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps: ['main'],

  paths: {
    // JavaScript folders
    libs: '../assets/js/libs',
    plugins: '../assets/js/plugins',
    //backstrapp: '/backstrapp',

    // Libraries
    almond: '../assets/js/libs/almond',
    json2: '../assets/js/libs/json2',
    iso8601: '../assets/js/libs/iso8601',
    jsonSerialize: '../assets/js/libs/json-serialize',

    jquery: '../assets/js/libs/jquery',
    underscore: '../assets/js/libs/underscore',
    handlebars: "../assets/js/libs/handlebars",
    backbone: "../assets/js/libs/backbone",
    marionette: "../assets/js/libs/backbone.marionette",

    // Shim Plugin
    use: '../assets/js/plugins/use'
  },

  use: {
    almond: { },

    json2: { },

    iso8601: { },

    jsonSerialize: {
      deps: ['use!json2', 'use!iso8601']
    },

    backbone: {
      deps: ['use!underscore', 'jquery'],
      attach: 'Backbone'
    },

    underscore: {
      attach: '_'
    },

    handlebars: {
      attach: 'Handlebars'
    },
    
    marionette: {
      deps: ["use!backbone"],
      attach: 'Backbone'
    }

  }
});
