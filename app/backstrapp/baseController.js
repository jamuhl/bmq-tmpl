define([
  'use!underscore',  
  'use!backbone'
],

function(_, Backbone) {

    var Controller = Backbone.Model.extend({

        navigate: function(fragment, args, options) {
            if (!_.isArray(args)) {
                options = args;
                args = [];
            }

            // call route function with provided args
            this[fragment].apply(this, args);

            Backbone.history.navigate(fragment, options);
        }//,

        // authRoute: function() {
        //     calix.app.user.auth();
        // }
        
    });

    return Controller;

});