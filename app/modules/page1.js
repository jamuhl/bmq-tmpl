define([
  "namespace"//,

  // Libs
  //"use!backbone"

  // Modules

  // Plugins
],

function(ns) {

  // Create a new module
  var Page1 = ns.module();

  var Controller = ns.Controller.extend({
        page1: function() {

            var view = new Page1.Views.Page();
            ns.app.main.show(view);

        }
  });


  Page1.controller = new Controller();

  var Router = ns.Router.extend({
      appRoutes: {
            "page1": "page1"
        },
        
        controller: Page1.controller
  });

  var router = new Router();

  // This will fetch the tutorial template and render it.
  Page1.Views.Page = ns.ItemView.extend({
    template: "page1",

    events: {
        'click #page2' : 'ui_page2'
    },

    ui_page2: function(e) {
      e.preventDefault();

      Page1.controller.navigate('page2');
    }

  });

  // Required, return the module for AMD compliance
  return Page1;

});