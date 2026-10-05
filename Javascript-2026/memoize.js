function memoize(func) {

    const map = {}
    return function (arg) {
        const argTemp = String(arg)
        if (map[argTemp]) {
            return map[argTemp]
        } else {
            const output = func.call(this, arg)
            map[argTemp] = output
            return output
        }
    }
}

let count = 0;
function identity(x) {
    count++;
    return x;
}

// expect(count).toBe(0);
// expect(memoizedFn('1')).toBe('1');
// expect(count).toBe(1);
// expect(memoizedFn('1')).toBe('1');
// expect(count).toBe(1);
// expect(memoizedFn(1)).toBe(1);

const memoizeFunc = memoize(identity);
memoizeFunc(1)