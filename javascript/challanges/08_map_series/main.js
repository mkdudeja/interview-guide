/* async function processArrayNum(num, fn) {
  return new Promise((resolve, reject) => {
    try {
      fn(num, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    } catch (err) {
      reject(err);
    }
  })
}

function mapSeries(arr, fn) {
  return new Promise((resolve, reject) => {
    const output = [];
    (async function() {
      for (let i of arr) {
        const result = await processArrayNum(i, fn);
        output.push(result);
      }
      
       resolve(output);
    })()
  })
} */

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function withRetry(cb) {
  let counter = 0;

  return async function fetchWithReattempt(...args) {
    try {
      counter++;
      console.log("Fetch Attempt", counter);
      const result = await cb(...args);
      return result;
    } catch (err) {
      if (counter < 3) {
        // wait for next attempt
        await wait(1000 * counter);
        // trigger re-attempt
        return await fetchWithReattempt();
      }

      throw err;
    } finally {
      counter = 0
    }
  };
}

async function processNumber(num, fn) {
  console.log("num", num);
  return new Promise((resolve, reject) => {
    fn(num, (error, result) => {
      if (error) {
        reject("error")
      } else {
        resolve(result)
      }
    })
  })
}

const getDataWithRetry = withRetry(processNumber);

function mapSeries(arr, fn) {
  return arr.reduce((acc, num) => {
    return acc.then((output) => getDataWithRetry(num, fn).then((result) => [...output, result]).catch((err) => [...output, "error"]));
  }, Promise.resolve([]))
}

let numPromise = mapSeries([1, 2, 3, 4, 5], function(num, callback) {
  // i am async iteratee function
  // do async operations here
  setTimeout(function() {
    num = num * 2;

    // throw error
    if (Math.random() > 0.5) {
      console.log("error", num);
      callback(true);
    } else {
      console.log("success", num);
      callback(null, num);
    }
  }, 1000);
});

numPromise
  .then((result) => console.log("success:" + result))
  .catch(() => console.log("no success"));
