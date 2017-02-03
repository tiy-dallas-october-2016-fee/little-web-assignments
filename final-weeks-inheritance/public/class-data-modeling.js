(function() {
  //Classes define patterns that can be used to create objects. Here is an animal pattern.
  class Animal {

    constructor(name) {
      this.name = name;
    }

    eat() {
      console.log(this.name + ' goes "chomp chomp."');
    }

    sleep() {
      console.log(this.name + ' goes "zzzzzzzzzz."');
    }

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

  class Anteater extends Animal {
    eat() {
      console.log(this.name + ' goes "slurp slurp."');
    }
  }

  var anteater = new Anteater('Zelda');
  console.log(anteater);
  anteater.eat();
  anteater.sleep();

})();
