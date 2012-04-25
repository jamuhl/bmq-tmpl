define([
  "namespace"//,

  // Libs
  //"use!backbone"

  // Modules

  // Plugins
],

function(ns) {

  // Create a new module
  var Example = ns.module();

  // Example extendings
  // Example.Model = Backbone.Model.extend({ /* ... */ });
  // Example.Collection = Backbone.Collection.extend({ /* ... */ });
  // Example.Router = Backbone.Router.extend({ /* ... */ });

  // This will fetch the tutorial template and render it.
  Example.Views.Tutorial = ns.ItemView.extend({
    template: "example"
  });

  // Required, return the module for AMD compliance
  return Example;

});
