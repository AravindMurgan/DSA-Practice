// Debouncing in Javascript
let counter = 0;
const getData = (...event) => {
    console.log(event)
    // calls an API and gets Data
    console.log("Fetching Data ..", counter++);
}

const debounce = function (fn, d, ...params) {
    let timer;
    return function () {
        let context = this;
        // args = ...params;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, [...params]);
        }, d);
    }
}

const args = [{ a: 1, b: 2, c: 'ggg' }]

const betterFunction = debounce(getData, 300, ...args);