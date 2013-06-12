define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/welcome.html'], function($, _, Backbone, templateData) {

  var HomeView = Backbone.View.extend({
    template: _.template(templateData),
    el: $("#site-container"),

    render: function() {
      this.$el.html( this.template({}) );

      $('.internal-items').html('');

      return this;
    }

  });

  return HomeView;

});