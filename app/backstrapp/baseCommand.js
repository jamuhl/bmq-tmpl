define([
  'use!underscore',
  'use!objectId',
  'use!backbone',
  'use!cqrs'
],

function(_, ObjectId, Backbone, CQRS) {

    var Command = Backbone.CQRS.Command.extend({
        
            initialize: function() {
                this.set({ id: new ObjectId().toString() });
            }
            
        });

    return Command;

});