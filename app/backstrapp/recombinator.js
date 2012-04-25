define([
  'use!underscore',  
  'use!backbone',
  'use!marionette',
  'use!handlebars',
  './templateLoader'
],

function(_, Backbone, Marionette, Handlebars, Loader) {

    var ns = {}
      , mario = Backbone.Marionette;

    // append to ns
    ns.Marionette = mario;

    // layout
    ns.Layout = mario.Layout;
    ns.Region = mario.Region;

    // views
    ns.ItemView = mario.ItemView;
    ns.CollectionView = mario.CollectionView;
    ns.CompositeView = mario.CompositeView;

    // add an App
    ns.app = new ns.Marionette.Application();
    ns.app.store = new Backbone.Model();
    ns.renderer = mario.Renderer;


    Backbone.Marionette.TemplateCache.loadTemplate = function(templateId, callback) {
        var self = this
          , path = 'app/templates/' + templateId + '.html';

        Loader.fetchTemplate(path, function(tmpl) {
            var ret = (_.isFunction(tmpl)) ? tmpl : Handlebars.compile(tmpl);
            callback.call(self, ret);
        });      
    };

    var renderTemplate = function (template, data) {
        if (!template) return null;
        var rendering = template(data);
        //if ($.i18n && rendering && rendering.length > 2) $(rendering).i18n();
        return rendering;
    };

    ns.renderer.renderTemplate = renderTemplate;

    return ns;

});