// function isPlainObject(val) {

//     const protoype = Object.getPrototypeOf(val)

//     return protoype === null || protoype === Object.prototype
// }
// function deepOmit(val, keys) {

//     if (Array.isArray(val)) {
//         return val.map(vl => deepOmit(vl, keys))
//     }

//     if (isPlainObject(val)) {
//         const newObj = {}

//         for (let key in val) {

//             if (!keys.includes(key)) {
//                 newObj[key] = val[key]
//             }
//         }

//         return newObj
//     }

//     return val;
// }

export default function deepOmit(_val, keys) {

    function traverse(val, keys, result) {
        const type = typeof val;
        if (type === 'string' || type === 'number') return val;

        if (Array.isArray(val)) {
            return val.map(vl => traverse(vl, keys, result));
        }

        if (type === 'object' && val != null) {
            const set = new Set(keys)
            for (let [k, v] of Object.entries(val)) {

                if (!set.has(k)) {
                    result[k] = traverse(v, keys, result)
                }
            }

        }

        return val;

    }
    const result = {}

    traverse(_val, keys, result)

    return result
}

const nestedData = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: 4,
            g: 5,
        },
    },
};
const keysToOmit = [];
deepOmit(nestedData, keysToOmit);