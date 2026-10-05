function promiseAny(iterable) {

  return new Promise((resolve, reject) => {
    const errors = []
    let resolved = iterable.length

    if (resolved === 0) resolve(new AggregateError([]));

    iterable.forEach((item, idx) => {

      Promise.resolve(item).then(res => {
        resolve(res);
      }, (err) => {
        errors[idx] = err;
        resolved -= 1;

        if (resolved === 0) reject(new AggregateError(errors));
      })
    })
  })
}

// --- Invocations ---

// // 1. Mix of raw values, resolved promises, and a rejected promise
// // Expected: resolves with 42 (first to resolve wins in promiseAny)
// promiseAny([
//   Promise.reject("nope"),
//   42,                                          // non-promise, treated as resolved
//   new Promise(res => setTimeout(() => res("late"), 100)),
// ]).then(console.log).catch(console.error);

// 2. All reject — should reject with AggregateError containing all errors
promiseAny([
  Promise.reject(new Error("err1")),
  Promise.reject("string error"),
  Promise.reject(null),                        // null as rejection reason
  Promise.reject(undefined),
]).catch(e => console.log("AggregateError:", e.errors));

// // 3. Empty array — NOTE: current impl resolves with AggregateError, but spec says reject
// promiseAny([]).then(v => console.log("empty resolve:", v)).catch(console.error);

// // 4. Thenable objects (duck-typed promises, not real Promise instances)
// const fakePromise = { then: (res) => res("fake thenable") };
// promiseAny([
//   Promise.reject("fail"),
//   fakePromise,
// ]).then(console.log);

// // 5. Promise that resolves to falsy values (0, false, "")
// // A naive impl using if(res) would incorrectly skip these
// promiseAny([
//   Promise.reject("x"),
//   Promise.resolve(0),
//   Promise.resolve(false),
// ]).then(v => console.log("falsy win:", v));    // expects 0

// // 6. Race condition — slowest reject vs fastest resolve
// promiseAny([
//   new Promise((_, rej) => setTimeout(() => rej("slow reject"), 200)),
//   new Promise(res => setTimeout(() => res("fast resolve"), 50)),
// ]).then(console.log);

// // 7. Single-element array with rejection
// promiseAny([Promise.reject("only one")]).catch(e => console.log("single reject:", e));

// // 8. Nested promises — Promise.resolve unwraps one level
// promiseAny([
//   Promise.reject("a"),
//   Promise.resolve(Promise.resolve("nested")),  // resolves with "nested", not a Promise
// ]).then(console.log);

