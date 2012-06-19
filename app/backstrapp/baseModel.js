define([
  'underscore',  
  'backbone'
],

function(_, Backbone) {

    var orginalDestroy = Backbone.Model.prototype.destroy;

    var Model = Backbone.Model.extend({

        useCQRS: true,

        initialize: function() {
            // bind this model to get event updates - a lot of magic ;)
            // not more to do the model gets updated now
            if (this.bindCQRS && this.useCQRS) this.bindCQRS(); 
        },
    
        fetchNew: function(options) {
            options = options || {};
            var model = this,
                success = options.success;
            options.success = function(resp, status, xhr) {
                _(model.parse(resp, xhr)).each(function(item) {
                    if (!model.get(item.id)) {
                        model.add(item, {silent:true});
                    }
                });
                if (!options.silent) model.trigger('reset', model, options);
                if (success) success(model, resp);
            };
            return (this.sync || Backbone.sync).call(this, 'read', this, options);
        },

        destroy: function(options) {
            if (this.unbindCQRS && this.useCQRS) this.unbindCQRS();

            orginalDestroy.call(this, options);
        }
        
    });

    return Model;

});