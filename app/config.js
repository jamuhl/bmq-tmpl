// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps: ['main'],

  paths: {
    // JavaScript folders
    libs: '../assets/js/libs',
    plugins: '../assets/js/plugins',

    // Libraries
    augment: '../assets/js/libs/augment',
    json2: '../assets/js/libs/json2',
    iso8601: '../assets/js/libs/iso8601',
    jsonSerialize: '../assets/js/libs/json-serialize',
    objectId: '../assets/js/libs/objectId',

    jquery: '../assets/js/libs/jquery-1.7.2',
    underscore: '../assets/js/libs/lodash-0.3.2',
    handlebars: "../assets/js/libs/handlebars-1.0.0.beta.6",
    backbone: "../assets/js/libs/backbone-0.9.2",
    marionette: "../assets/js/libs/backbone.marionette-0.7.0",
    cqrs: "../assets/js/libs/backboneCQRS-0.5.0"
  },

  shim: {
        augment: [],

        json2: [],

        iso8601: [],

        jsonSerialize: ['json2', 'iso8601'],

        objectId: {
            deps: [],
            exports: 'ObjectId'
        },

        underscore: {
            deps: [],
            exports: '_'
        },

        handlebars: {
            deps: [],
            exports: 'Handlebars'
        },

        marionette: {
            deps: ['backbone'],
            exports: 'Backbone.Marionette'
        },

        cqrs: {
            deps: ['backbone'],
            exports: 'Backbone.CQRS'
        },

        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }

    }
});
