// export default function squashObject(_obj) {

//     function process(obj, path, result) {

//         for (let [key, val] of Object.entries(obj)) {

//             if (typeof val != 'object' || val == null) {
//                 result[path.concat(key).filter(Boolean).join('.')] = val;
//                 continue;
//             }
//             process(val, path.concat(key), result);



//         }

//     }

//     const result = {}
//     process(_obj, [], result);
//     return result;
// }

// const object = {
//     a: 5,
//     b: 6,
//     c: {
//         f: 9,
//         g: {
//             m: 17,
//             n: 3,
//         },
//     },
// };

// squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
function isPlainObj(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

export default function squashObject(obj: Object): Object {

    function squashObjectFunc(obj: Object, array: [], result: Record<string, any>) {

        for (let [key, val] of Object.entries(obj)) {
            if (isPlainObj(val)) {
                squashObjectFunc(obj[key], array.concat(key), result);

            } else {
                result[array.concat(key).join('.')] = val;
            }
        }
    }
    const result = {}
    squashObjectFunc(obj, [], result)
    return result
}

const object = {
    a: { b: null, c: undefined },
};
const obj2 = {
    a: ['hi', 'bye'],
}
squashObject(obj2); 