// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps: ['main'],

  paths: {
    // JavaScript folders
    libs: '../assets/js/libs',
    plugins: '../assets/js/plugins',

    // Libraries
    almond: '../assets/js/libs/almond',
    json2: '../assets/js/libs/json2',
    iso8601: '../assets/js/libs/iso8601',
    jsonSerialize: '../assets/js/libs/json-serialize',
    objectId: '../assets/js/libs/objectId',

    jquery: '../assets/js/libs/jquery-1.7.2',
    underscore: '../assets/js/libs/underscore-1.3.1',
    handlebars: "../assets/js/libs/handlebars-1.0.0.beta.6",
    backbone: "../assets/js/libs/backbone-0.9.2",
    marionette: "../assets/js/libs/backbone.marionette-0.7.0",
    cqrs: "../assets/js/libs/backboneCQRS-0.5.0",

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

    objectId: {
      attach: 'ObjectId'
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
    },

    cqrs: {
      deps: ["use!backbone"],
      attach: 'Backbone'
    }

  }
});
