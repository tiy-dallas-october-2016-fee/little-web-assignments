if (window.EE === undefined) { window.EE = {}; }

(function() {

  var items = [];
  var emitter = new Emitter();

  var data = {

    emitter: emitter,

    addItem: function(item) {
      console.log('adding');
      items.push(item);
      emitter.emit('changed');
    },

    removeItem: function(index) {
      console.log('removing');
      items.splice(index, 1);
      emitter.emit('changed');
    },

    getItems: function() {
      return items;
    }
  };

  EE.Data = data;

})();
