define([
  'jquery',
  'underscore',
  'backbone',
  'localStorage',
  'models/item/ItemModel'
], function($, _, Backbone, localStorage, ItemModel){
  var Items = Backbone.Collection.extend({
    model: ItemModel,

    // Enable localStorage
    localStorage: new Backbone.LocalStorage("item"),
    
    initialize: function(){
      this.fetch();
    }

  });
 
  return Items;
});
