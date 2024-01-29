// There is already Array.prototype.flat() in JavaScript (ES2019),
// which reduces the nesting of Array.

// Ex. [1, [2], [3, [4]]].flat() => [1, 2, 3, 4]

// Could you manage to implement your own one?
// Here is an example to illustrate

// const arr = [1, [2], [3, [4]]];

// flat(arr, 1) =>
// [1, 2, 3, [4]]

// flat(arr, 2)
// [1, 2, 3, 4]

/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  // your imeplementation
}
