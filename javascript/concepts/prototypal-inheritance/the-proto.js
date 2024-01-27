// const user = {
//   name: "Manish Kumar",
//   greet: function () {
//     return `Welcome to JavaScript!!!`;
//   },
// };

// const admin = {
//   isAdmin: true,
// };

// admin.__proto__ = user; // changed the prototype from default -> user..

// console.log("admin name", admin.fullName);

// console.log("admin", admin);

// for (let prop in admin) {
//   if (admin.hasOwnProperty(prop)) {
//     console.log("own property", prop);
//   } else {
//     console.log("inherited property", prop);
//   }
// }

// console.log(Object.keys(admin));

// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// alert(rabbit.jumps); // ? (1)

// delete rabbit.jumps;

// alert(rabbit.jumps); // ? (2)

// delete animal.jumps;

// alert(rabbit.jumps); // ? (3)

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// console.log(bed.glasses);

// let animal = {
//   eat() {
//     this.full = true;
//     // rabbit.full = true;
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };

// rabbit.eat();

// console.log(rabbit);

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
    // speedy.stomach.push(food);
    // stomach: ["apple"] - hamster
  },
};

let speedy = {
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple

console.log("speedy", speedy);
