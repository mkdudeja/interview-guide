console.log("hello world!");

// returns the state of *all* features for current user
function fetchAllFeatures() {
  // in reality, this would have been a `fetch` call:
  // `fetch("/api/features/all")`
  return new Promise((resolve, reject) => {
    const sampleFeatures = {
      "extended-summary": true,
      "feedback-dialog": false,
    };
    setTimeout(resolve, 500, sampleFeatures);
  });
}

async function getFeatureState(prop, defaultValue) {
  try {
    const result = await fetchAllFeatures();
    return result?.[prop] || defaultValue;
  } catch (err) {
    // error handling
    console.error(err);
    return defaultValue;
  }
}

// // src/feature-x/summary.js
// getFeatureState("extended-summary", false)
//     .then(function (isEnabled) {
//         if (isEnabled) {
//             // showExtendedSummary();
//             console.log("extended-summary", true)
//         } else {
//             // showBriefSummary();
//             console.log("extended-summary", false)
//         }
//     });

// // src/feature-y/feedback-dialog.js
// getFeatureState("feedback-dialog", false)
//     .then(function (isEnabled) {
//         if (isEnabled) {
//             // makeFeedbackButtonVisible();
//             console.log("feedback-dialog", true)
//         } else {
//             console.log("feedback-dialog", false)
//         }
//     });

// getFeatureState("my-feedback-dialog", "hello-world")
//     .then(function (isEnabled) {
//         console.log("my-feedback-dialog", isEnabled)
//     });

const networkService = (function () {
  const subcriptions = {};

  return {
    getFeatureState: async function (featureName, defaultValue) {
      return new Promise((resolve, reject) => {
        try {
          this.getFeatures("get-fetures", function (result) {
            const response = result.data;
            response && resolve(result?.[featureName] || defaultValue);
          });
        } catch (err) {
          console.log("err", err);
          return defaultValue;
        }
      });
    },
    getFeatures: async function (url, cb) {
      if (!subcriptions[url]) {
        subcriptions[url] = {
          isFetching: false,
          isSuccess: false,
          callback: [],
          data: undefined,
          timestamp: undefined,
        };
      }

      const current = subcriptions[url];
      current.callback.push(cb);

      // check
      if (current.isFetching || current.isSuccess) {
        cb(current);
        return;
      }

      try {
        current.timestamp = Date.now();
        current.isFetching = true;
        const result = await fetchAllFeatures();

        // post call success
        current.isFetching = false;
        current.isSuccess = true;
        current.data = result;

        // call subscribers
        current.callback.forEach((cb) => {
          cb(current);
        });
      } catch (err) {
        current.isFetching = false;
        current.isSuccess = false;
        throw err;
      }
    },
  };
})();

// networkService.getFeatures("get-geatures", function (data) {
//     console.log("Call 1", data);
// })

// networkService.getFeatures("get-geatures", function (data) {
//     console.log("Call 2", data);
// })

// networkService.getFeatures("get-geatures", function (data) {
//     console.log("Call 3", data);
// })

// // src/feature-x/summary.js
networkService
  .getFeatureState("extended-summary", false)
  .then(function (isEnabled) {
    if (isEnabled) {
      // showExtendedSummary();
      console.log("extended-summary", true);
    } else {
      // showBriefSummary();
      console.log("extended-summary", false);
    }
  });

// // src/feature-y/feedback-dialog.js
networkService
  .getFeatureState("feedback-dialog", false)
  .then(function (isEnabled) {
    if (isEnabled) {
      // makeFeedbackButtonVisible();
      console.log("feedback-dialog", true);
    } else {
      console.log("feedback-dialog", false);
    }
  });

setTimeout(function () {
  networkService
    .getFeatureState("my-feedback-dialog", "hello-world")
    .then(function (isEnabled) {
      console.log("my-feedback-dialog", isEnabled);
    });
}, 5000);

// this is my name is manish kumat dudeja/.//.
