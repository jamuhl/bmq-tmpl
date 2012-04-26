define([
  'use!underscore',  
  'use!backbone'
],

function(_, Backbone) {

    var Controller = Backbone.Model.extend({

        navigate: function(fragment, args, options) {
            if (!_.isArray(args)) {
                options = args || {};
                args = [];
            }

            // call route function with provided args
            if (this[fragment]) {
                this[fragment].apply(this, args);
            } else { 
                options.trigger = true;
            }

            Backbone.history.navigate(fragment, options);
        }//,

        // authRoute: function() {
        //     calix.app.user.auth();
        // }
        
    });

    return Controller;

});