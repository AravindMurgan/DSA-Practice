/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
    const len = this.length;
    const results = [];

    for (let k = 0; k < len; k++) {
        const kValue = this[k];
        // console.log(Object.hasOwn(this, k))
        if (
            // Ignore index if value is not defined for index (e.g. in sparse arrays).
            Object.hasOwn(this, k) &&
            callbackFn.call(thisArg, kValue, k, this)
        ) {
            results.push(kValue);
        }
    }

    return results;
};


const output = [1, 2, '4', 4].myFilter(val => {
    console.log(this)

    return val % 2 == 0
}, 10)
console.log(output)