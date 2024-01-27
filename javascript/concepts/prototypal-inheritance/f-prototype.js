const animal = {
  eats: true,
  greet: function () {
    console.log("hello world 123!");
  },
  constructor: Mammal,
};

// // console.log("Mammal", Mammal);
// const dog = new Mammal("Dog");
// // dog.__proto__ = animal;

// dog.greet();
// console.log(dog.eats);

// Mammal.prototype = animal; // chanaging prototype of Mammal Cons. fn.

function Mammal(name) {
  this.name = name;
}

Mammal.prototype = animal;
// Mammal.prototype.eats = animal.eats;
// Mammal.prototype.greet = animal.greet;

const dog = new Mammal("Dog");

const cat = new dog.constructor("Cat");
console.log("dog", dog);
console.log("cat", cat);
