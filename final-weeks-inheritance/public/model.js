(function() {

  class Model {
    constructor(url) {
      this.url = url;
    }

    save() {

      var propsToSave = {};
      for (var prop in this) {
        if (prop !== 'url') {
          propsToSave[prop] = this[prop];
        }
      }

      $.ajax({
        url: this.url,
        method: 'POST',
        data: propsToSave
      })
      .done((data) => {
        console.log('data?', data);
      });

    }

  }



  var person = new Model('/api/person');
  person.firstName = 'Bob';
  person.lastName = 'Smith';
  person.age = 17;
  person.save();

})();
