define([
  'underscore',  
  'backbone',
  'cqrs'
],

function(_, Backbone, CQRS) {

    var ns = {};

    // Modify Backbone.Sync
    var origSync = Backbone.sync;

    Backbone.sync = function(method, model, options) {

        // if we got our deserializer run it to deserialize dates
        if (JSON.deserialize) {

            var success = options.success;
            options.success = function(resp, status, xhr) {
                resp = JSON.deserialize(resp);
                if (success) success(resp, status, xhr);
            };

        }

        var type = methodMap[method];

        // __only change is here__ only allow get!
        if (type !== 'GET') {
            return options.success();
        } else {
            origSync(method, model, options);
        }
    };

    // Mappings from backbone to server methode.
    var methodMap = {
     'create': 'POST',
     'update': 'PUT',
     'delete': 'DELETE',
     'read': 'GET'
    };

    // // we just have to override eventNameAttr:
    // Backbone.CQRS.hub.init({ 
    //     eventNameAttr: 'event',
    //     parseEvent: function(msg) {
    //         //msg.payload.revision = msg.head.revision;
    //         return msg;
    //     },
    //     getCommandId: function(data) {
    //         return data.commandId;
    //     }
    // });

    // override Backbone.sync with CQRS.sync which allows only GET method
    // Backbone.sync = Backbone.CQRS.sync;

    // add denormalizer to namespace
    ns.EventDenormalizer = Backbone.CQRS.EventDenormalizer;

    return ns;

});