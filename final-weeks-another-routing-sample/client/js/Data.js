if (window.R === undefined) { window.R = {}; }

(function() {

  var data = {
    things: [
      {
        id: 1,
        name: 'Gundam figurine',
        type: 'Decoration',
        description: 'I bought this cool Gundam figurine kit in Japan once. Took me a long time to build it. It was shorter than I expected. It is also a bit fragile.'
      },
      {
        id: 6,
        name: 'How to Read a Book',
        type: 'Book',
        description: 'This book is a book about reading books well. It is a bit strange to read a book about reading books but it is good and worth the time investment.'
      },
      {
        id: 17,
        name: 'Fish tank',
        type: 'Furniture',
        description: 'I have a large fish tank. It is probably about 50 gallons. A friend gave it to me and I like it.'
      }
    ],

    findById: function(id) {
      var item = this.things.find((x) => {
        console.log('id', id, 'x.id', x.id);
        if (x.id == id) {
          return x;
        }
      });
      return item;
    }
  };

  R.Data = data;

})();
