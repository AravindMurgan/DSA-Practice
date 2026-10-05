

// function jsonStringify(value) {
//     if (Array.isArray(value)) {
//         const arrayValues = value.map((item) => jsonStringify(item));
//         return `[${arrayValues.join(',')}]`;
//     }

//     if (typeof value === 'object' && value !== null) {
//         const objectEntries = Object.entries(value).map(
//             ([key, value]) => `"${key}":${jsonStringify(value)}`,
//         );
//         return `{${objectEntries.join(',')}}`;
//     }

//     if (typeof value === 'string') {
//         return `"${value}"`;
//     }

//     return String(value);
// }

function jsonStringify(value) {
    const type = typeof value;

    if (Array.isArray(value)) {

        return `[${value.map(val => jsonStringify(val)).join(',')}]`
    }


    if (type === 'object' && ) {

        const arr = Object.entries(value).map(([key, val]) => `"${key}" :${jsonStringify(val)}`);
        console.log(arr)
        return `{${arr.join(',')}}`;
    }

    if (type === 'string') {
        return `"${value}"`;
    }

    return String(value);
}

// jsonStringify({ foo: 'bar', bar: [1, 2, 3], bee: [{ beez: 'beez' }] }); 
// jsonStringify({ a: 1, b: 2 })
console.log(jsonStringify(undefined))
console.log(jsonStringify(NaN))
console.log(jsonStringify(Infinity))

Number.isNaN(value) || Number.isFinite(value) return 'null'