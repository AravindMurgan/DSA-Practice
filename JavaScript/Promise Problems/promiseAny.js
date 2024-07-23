function myPromiseAny(taskList) {
  const result = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    for (let task of taskList) {
      task
        .then((val) => {
          resolve(val);
        })
        .catch((error) => {
          result.push(error);
          count += 1;

          if (count === taskList.length) {
            reject(result);
          }
        });
    }
  });
}

const test1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "one");
});
const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, "two");
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});

myPromiseAny([test1, test2, test3])
  .then(function (value) {
    // first and third fails, 2nd resolves
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });

const race = function (promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        // resolve, when any of the input promise resolves
        .then(resolve, reject)
        // reject, when any of the input promise rejects
        .catch(reject);
    });
  });
};
