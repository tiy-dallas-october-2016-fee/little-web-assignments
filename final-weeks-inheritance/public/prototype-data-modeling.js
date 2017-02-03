
(function() {
  //Functions are normally used to define chunks of code that can be re-run.
  //However, you can use functions to define patterns that can be used to create objects. Here is an animal pattern.
  //This is how you define "classes" prior to ES6.

  //Think of this as its constructor function.
  function Animal(name) {
    this.name = name;
  }

  //To add things to the definition of a type, you can add them to the prototype. You can do it this way...
  Animal.prototype = {
    eat: function() {
      console.log(this.name + ' goes "chomp chomp."');
    }
  };

  //...or this way.
  Animal.prototype.sleep = function() {
    console.log(this.name + ' goes "zzzzzzzzzz."');
  }


  //Here I create an instance of Animal. The `this` in it refers to this instance.
  var rover = new Animal('Rover');
  console.log('rover', rover);
  rover.eat();
  rover.sleep();

  //The `this` in this instance of Animal refers to Cringer.
  var cringer = new Animal('Cringer');
  console.log('cringer', cringer);
  cringer.eat();
  cringer.sleep();

  //What if you don't like all animals to have the same characteristics? You can inherit and override.

  function Anteater(name) {
    this.name = name;
  }

  Anteater.prototype = new Animal();

  Anteater.prototype.eat = function() {
    console.log(this.name + ' goes "slurp slurp."');
  }

  var anteater = new Anteater('Zelda');
  console.log(anteater);
  anteater.eat();
  anteater.sleep();

})();
