// https://bigfrontend.dev/problem/first-bad-version
// Say you have multiple versions, write a program that will find and return
// the first bad revision given a isBad(version) function.
// Versions after first bad version are supposed to be all bad versions.
// notes: Inputs are all non-negative integers
// if none found, return -1

function firstBadVersion(isBad) {
  // firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    // 0 .... 99
    // isBad(i) => true => breal; return i;

    let counter = 0;
    let left = 0;
    let right = version;

    // i >= 4;
    // 1 2 3 4 5 6 7 8 9 10
    // left = 4
    // right = 3
    // middle = 4 (isBad - yes)

    while (left <= right) {
      counter++;
      const middle = Math.floor((left + right) / 2);
      if (isBad(middle)) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }

    console.log("counter", counter);
    return isBad(left) ? left : -1;

    // // write your code to return the first bad version
    // // if none found, return -1
    // let counter = 0;
    // let badVersion = -1;
    // let i = 0;

    // while (i <= version) {
    //   counter++;
    //   if (isBad(i)) {
    //     badVersion = i;
    //     break;
    //   } else {
    //     i++;
    //   }
    // }

    // console.log("counter", counter);
    // return badVersion;
  };
}

const checkBadVersion = firstBadVersion((i) => i >= 99);
console.log("validate 100", checkBadVersion(100)); // 99
// console.log("validate 3", checkBadVersion(3)); // -1
