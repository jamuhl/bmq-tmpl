define([
  'underscore',  
  'backbone',
  'marionette'
],

function(_, Backbone, Marionette) {

    var ExtendedItemView = Backbone.Marionette.ItemView.extend({

        initialEvents: function() {
            if (this.model) {
                this.bindTo(this.model, 'change:selected', this.toggleSelected, this);
            }
            if (this.collection) {
                this.bindTo(this.collection, 'reset', this.render, this);
            }
        },

        getTemplateSelector: function() {

            function getTmplString(name) {
                var template = this[name] || this.options[name];

                if (_.isFunction(template)){
                    template  = template.call(this);
                }
                return template;
            }

            var tmpl;

            if (this.model && this.model.get('readOnly')) {
                tmpl = getTmplString.call(this, 'templateReadOnly');
                if (tmpl) return tmpl;
            }

            if (this.model && this.model.get('editMode')) {
                tmpl = getTmplString.call(this, 'templateEditMode');
                if (tmpl) return tmpl;
            }

            if (this.model && this.model.get('selected')) {
                tmpl = getTmplString.call(this, 'templateSelected');
                if (tmpl) return tmpl;
            }

            return getTmplString.call(this, 'template');
        },

        ui_toggleEditMode: function(e) {
            e.preventDefault();

            var isInEditMode = this.model.get('editMode');

            if (!isInEditMode) {
                this.model.set('editMode', true);
            } else {
                 this.model.set('editMode', false);
            }
        },

        ui_toggleSelected: function(e) {
            e.preventDefault();

            // deselect all models in this models collection
            this.model.collection.each(function(model) {
                model.set('selected', false);
                model.set('editMode', false, {silent: true});
            });

            // select this model
            this.model.set('selected', true);
        },
        
        toggleSelected: function() {
            var isSelected = this.model.get('selected');

            if (isSelected) {
                this.$el.addClass('selected');
            } else {
                this.$el.removeClass('selected');
            }

            this.render();
        }

    });

    return ExtendedItemView;

});