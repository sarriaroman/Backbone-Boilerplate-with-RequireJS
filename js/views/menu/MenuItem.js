define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/menu/menu_item.html'], function($, _, Backbone, templateData) {

  var MenuItem = Backbone.View.extend({
    template: _.template(templateData),
    el: $("#sidebar #container"),

    events: function() {
      // Custom events
      var evs = {};

      evs['click #menu' + this.id] = 'click';

      return evs;
    },
    render: function() {
      var tmp = this.template({
        id: this.options.id,
        title: this.options.title
      });

      this.$el.append(tmp);

      return this;
    },

    click: function() {
      window.router.navigate(this.id + '/show', {
        trigger: true
      });
    },


  });

  return MenuItem;

});