// Please implement a curry() function, which accepts a function and return a curried one.

// Here is an example
// const join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }

// join(1, 2, 3) // '1_2_3'

// const curriedJoin = curry(join)
// curriedJoin(1)(2)(3) // '1_2_3'
// curriedJoin(1)(2, 3) // '1_2_3'
// curriedJoin(1, 2)(3) // '1_2_3'
// curriedJoin(1, 2, 3) // '1_2_3'

function sum(a, b) {
  return a + b;
}

const result = sum(3, 5);
console.log("result", result);

function curry(cb) {
  return function (a) {
    return function (b) {
      return cb(a, b);
    };
  };
}

const curriedSum = curry(sum);
const result1 = curriedSum(3)(5);
console.log("result1", result1);

const adder5 = curriedSum(5);
console.log(adder5(3));
console.log(adder5(4));
console.log(adder5(5));
console.log(adder5(6));

const adder10 = curriedSum(10);
console.log(adder10(3));
console.log(adder10(4));
console.log(adder10(5));
console.log(adder10(6));

function curried(cb) {
  return function curryMethod(...args) { // [1, 2, 3]
    if (args.length >= cb.length) {
      return cb.apply(this, args);
    } else {
      return function (...args2) { // 3
        return curryMethod.apply(this, args.concat(args2)); 
      };
    }
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

console.log("org", join(1, 2, 3)); // '1_2_3'

const curriedJoin = curried(join);
console.log(curriedJoin(1)(2)(3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
