define([
  'jquery',
  'underscore',
  'backbone',
  'views/menu/MenuItem'
], function($, _, Backbone, MenuItem){

  var SidebarView = Backbone.View.extend({
    el: $("#sidebar"),

    render: function() {
      (new MenuItem({ 
        id: 'items',
        title: 'Lorem ipsum'
      })).render();
    }

  });

  return SidebarView;
  
});
