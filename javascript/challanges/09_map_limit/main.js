function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id)
  }, randomRequestTime);
}

mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
  console.log('output:', allResults) // ["User1", "User2", "User3", "User4", "User5"]
})

function chop(arr, limit) {
  const result = [];

  let i = 0;
  while (i < arr.length) {
    result.push(arr.slice(i, i + limit));
    i += limit;
  }

  return result;
}

function promisify(fn) {
  return async function(id) {
    return new Promise((resolve, reject) => {
      try {
        fn(id, (result) => {
          resolve(result)
        });
      } catch (err) {
        reject(err);
      }
    });
  }
}

async function processChunkItem(item) {
  const result = [];
  return new Promise((resolve, reject) => {
    item.forEach((id) => {
      getNameById(id, (name) => {
        result.push(name);
        if (result.length === item.length) {
          resolve(result);
        }
      })
    })
  })
}

async function processChunks(chunks) {
const output = [];
  for (const item of chunks) {
    const result = await processChunkItem(item);
    output.push(...result);
  }
  return output;
}


function mapLimit(arr, limit, fn, cb) {
  const result = chop(arr, limit);
  const getNameByUser = promisify(fn);

// approach 1
/*   const finalPromise = result.reduce((acc, values) => {
    const promises = values.map((id) => getNameByUser(id));
    return acc.then((res) => {
      return Promise.all(promises).then((hh) => [...res, ...hh])
    })
  }, Promise.resolve([]));
 
  finalPromise.then((result) => {
    cb(result);
  }) */
 
  // approach 2
  processChunks(result).then((result) => {
    cb(result);
  })

}
