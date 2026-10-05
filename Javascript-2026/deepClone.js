
// const obj = { user: 1, value: Infinity, datey: new Date("December 17, 1995 03:24:00") }

// const obj2 = JSON.parse(JSON.stringify(obj))

// console.log(obj.datey === obj2.datey)

// const val = [new Map()];
// val[0].set(1, 2)

// console.log(Object.fromEntries(val))

function deepClone(value) {
    if (typeof value !== 'object' || value === null) {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map((item) => deepClone(item));
    }

    return Object.fromEntries(
        Object.entries(value).map(([key, value]) => [key, deepClone(value)]),
    );
}
const obj = [{ a: { id: 'foo' } }, { b: { id: 'baz' } }];
const clonedObj = deepClone(obj);
clonedObj[1].b = { id: 'bax' };