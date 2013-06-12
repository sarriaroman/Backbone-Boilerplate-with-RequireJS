define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/sidebar/SidebarView',
  'views/items/ItemsView'], function($, _, Backbone, HomeView, SidebarView, ItemsView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'items/:action(/:id)': 'addItems',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function() {

    var app_router = new AppRouter;

    app_router.on('route:addItems', function(action, id) {
      new ItemsView({
        action: action,
        id: id
      });
    });

    app_router.on('route:defaultAction', function(actions) {
      var homeView = new HomeView();
      homeView.render();
    });

    var sidebarView = new SidebarView();
    sidebarView.render();

    Backbone.history.start();

    // Global var for router
    window.router = app_router;
  };

  return {
    initialize: initialize
  };
});