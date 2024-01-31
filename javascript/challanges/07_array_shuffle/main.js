// Implement an array shuffle() ?

// const arr = [1, 2, 3];
// [1, 2, 3]
// [2, 1, 3]
// [2, 3, 1]
// ....

// Such that...
// 1. It should modify the array inline
// 2. All element orders should have an equal probability.

/**
 * @param {number[]} arr
 * @returns {void}
 */
function shuffle(arr) {}

// counts of appearances for all possible permutations
let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join("")]++;
}

// show counts of all possible permutations
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

// test run
const input = [1, 2, 3];
console.log("before shuffle", JSON.stringify(input));
shuffle(input);
console.log("after shuffle", JSON.stringify(input));
