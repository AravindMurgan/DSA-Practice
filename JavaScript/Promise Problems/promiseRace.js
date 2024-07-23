// function myPromiseRace(taskList){

//     return new Promise((resolve,reject)=>{
//         for(let promise of taskList){
//             return  Promise.resolve(promise)
//             .then(resolve,reject)
//             .catch(reject);
//         }
//     })

// }

const myPromiseRace = function (promisesArray) {
  return new Promise((resolve, reject) => {
    //debugger
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        // resolve, when any of the input promise resolves
        .then(resolve, reject)
        // reject, when any of the input promise rejects
        .catch(reject);
    });
  });
};

const test1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 20000, "one");
});
const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 10000, "two");
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 5000, "three");
});

const taskList = [test1, test2, test3];

myPromiseRace(taskList)
  .then((val) => console.log(val))
  .catch((error) => console.error("myError", error));
