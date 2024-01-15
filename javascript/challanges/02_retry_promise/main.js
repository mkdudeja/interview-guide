console.log("Challange:: Retry Promise!!!");

// AMAZON, ADOBE, FLIPKART...
// write a function which adds the retry mechanism to the original function
// when resolved, should return the results to the caller
// retry mechanism say for 3 attempts
// adds a wait for next re-attempt

async function getData(url, name) {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          resolve("promise resolved");
        } else {
          reject("An error occured while data fetch");
        }
      }, 1000);
    });
  } catch (err) {
    throw err;
  }
}

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function withRetry(cb) {
  let counter = 0;

  return async function fetchWithReattempt() {
    try {
      counter++;
      console.log("Fetch Attempt", counter);
      const result = await cb();
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

const getDataWithRetry = withRetry(getData);

// load data from API
async function fetchDataFromAPI() {
  try {
    const result = await getDataWithRetry(arg1, arg2); // 2 pass
    console.log("result::", result);

    const result1 = await getDataWithRetry(arg1, arg2);
    console.log("result::", result);
  } catch (err) {
    console.error("fetchDataFromAPI", err);
  }
}

fetchDataFromAPI();

// next challanges..
// 1. support for arguments