define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/item/item.html',
  'collections/items/Items',
  'text!templates/menu/internal_item.html'
], function($, _, Backbone, templateData, Items, internalItem){

  var ItemsView = Backbone.View.extend({
    template: _.template(templateData),
    el: $("#site-container"),

    items : new Items,

    events : {
      'click #item-button' : 'save',
    },

    initialize: function(obj) {
      if( obj != undefined ) {
        this[obj.action](obj.id);
      }
    },

    render: function(){

      this.$el.html( this.template({}) );

      this.loadData();      

      return this;
    },

    loadData : function() {
      var that = this;
      var selfId = '#menu-container-items';

      $(selfId).html('');
      var temp = _.template(internalItem);

      this.items.each(function(obj) {
        $(selfId).append( temp({ data: obj.attributes }) );
      });
    },

    show : function() {
      this.render();
    },

    remove : function(id) {
      console.info('Remove: ' + id);

      var mdl = this.items.get(id);
      mdl.destroy();

      window.router.navigate('items/show', { trigger: true } );
    },

    save : function() {
      var save_obj = this.processForm();
      if( save_obj ) {
        this.items.create(save_obj);

        this.loadData();
      }
    },

    processForm : function() {
      var obj = {};
      var data = $('#data-form').serializeArray();
      for( var indx in data ) {
        var dt = data[indx];

        if( $.trim( $('#data-form input[name=' + dt.name + ']').val() ) == '' && $('#data-form input[name=' + dt.name + ']').attr('required') ) {
          alert('Todos los campos son requeridos');
          return undefined;
        }

        obj[ dt.name ] = dt.value;

        $('#data-form input[name=' + dt.name + ']').val('');
      }

      return obj;
    },


  });

  return ItemsView;
  
});
