'use strict';

if (window.EE === undefined) {
  window.EE = {};
}

(function () {

  var items = [];
  var emitter = new Emitter();

  var data = {

    emitter: emitter,

    addItem: function addItem(item) {
      console.log('adding');
      items.push(item);
      emitter.emit('changed');
    },

    removeItem: function removeItem(index) {
      console.log('removing');
      items.splice(index, 1);
      emitter.emit('changed');
    },

    getItems: function getItems() {
      return items;
    }
  };

  EE.Data = data;
})();
//# sourceMappingURL=Data.js.map
