// Promise.prototype.myFinally=function(callBack){
//     debugger
//     console.log(typeof callBack)
//     if(typeof callback !== 'function'){
//         return this.then(callBack,callBack)
//     }

//     const P = this.constructor || Promise

//     return this.then(
//         value => P.resolve(callback()).then(() => value),
//         err => P.resolve(callback()).then(() => { throw err; })
//     );

// }

// const promise = Promise.resolve(42)

// promise.myFinally(() => {
//     console.log('Finally callback executed');
//     return 'Cleanup done';
// }).then(value => {
//     console.log('Resolved with value:', value);
// }).catch(err => {
//     console.log('Rejected with error:', err);
// });

Promise.prototype.finally = function (callback) {
  if (typeof callback !== "function") {
    return this.then(callback, callback);
  }
  // get the current promise or a new one
  const P = this.constructor || Promise;
  // return the promise and call the callback function
  // as soon as the promise is rejected or resolved with its value
  return this.then(
    (value) => P.resolve(callback()).then(() => value),
    (err) =>
      P.resolve(callback()).then(() => {
        throw err;
      })
  );
};



console.log(Promise.resolve(42).finally(55).then(val=> console.log(val)).catch(err=> console.log('err',err)))
// // This test case is from stack overflow.
// const logger =(label, start = Date.now()) =>(...values) => {
//     console.log(label, ...values, `after ${Date.now() - start}ms`);
//   };
// const delay = (value, ms) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, ms, value);
//   });
// function test(impl) {
//   const log = (ordinal) => (state) => logger(`${ordinal} ${impl} ${state}`);
//   const first = log("first");
//   // test propagation of resolved value
//   delay(2, 1000)
//     .finally(first("settled"))
//     .then(first("fulfilled"), first("rejected"));
//   const second = log("second");
//   // test propagation of rejected value
//   delay(Promise.reject(3), 2000)
//     .finally(second("settled"))
//     .then(second("fulfilled"), second("rejected"));
//   const third = log("third");
//   // test adoption of resolved promise
//   delay(4, 3000)
//     .finally(third("settled"))
//     .finally(() => delay(6, 500))
//     .then(third("fulfilled"), third("rejected"));
//   const fourth = log("fourth");
//   // test adoption of rejected promise
//   delay(5, 4000)
//     .finally(fourth("settled"))
//     .finally(() => delay(Promise.reject(7), 500))
//     .then(fourth("fulfilled"), fourth("rejected"));
// }
// test("polyfill");
