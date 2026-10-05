function shouldDeepCompare(type) {
    return type === '[object Object]' || type === '[object Array]';
}

function getType(value) {
    return Object.prototype.toString.call(value);
}

// // function deepEqual(valueA, valueB) {
// //     // Check for arrays/objects equality.
// //     const typeA = getType(valueA);
// //     const typeB = getType(valueB);

// //     // Only compare the contents if they're both arrays or both objects.
// //     if (typeA === typeB && shouldDeepCompare(typeA) && shouldDeepCompare(typeB)) {
// //         const entriesA = Object.entries(valueA);
// //         const entriesB = Object.entries(valueB);

// //         if (entriesA.length !== entriesB.length) {
// //             return false;
// //         }

// //         return entriesA.every(
// //             // Make sure the other object has the same properties defined.
// //             ([k, v]) => Object.hasOwn(valueB, k) && deepEqual(v, valueB[k]),
// //         );
// //     }

// //     // Check for primitives + type equality.
// //     return Object.is(valueA, valueB);
// // }


// function shouldDeepCompare(type) {

//     return type === '[object Array]' || '[object Object]'
// }

// function getType(val) {

//     return Object.prototype.toString.call(val)
// }
// export default function deepEqual(valueA, valueB) {
//     const typeA = getType(valueA)
//     const typeB = getType(valueB)

//     if ((typeA === typeB) && shouldDeepCompare(typeA) && shouldDeepCompare(typeB)) {
//         const valA = Object.entries(valueA)
//         const valB = Object.entries(valueB)

//         if (valA.length !== valB.length) return false;


//         return valA.every(([k, v]) => Object.hasOwn(valueB, k) && deepEqual(v, valueB[k]))

//     }

//     return Object.is(valueA, valueB)
// }

// deepEqual({ id: 1 }, { id: 1 }); 

// function shouldDeepCompare(type) {
//     return type === '[object Object]' || type === '[object Array]';
// }

// function getType(val) {
//     return Object.prototype.toString.call(val);
// }

// function deepEqual(valueA, valueB) {
//     const typeA = getType(valueA)
//     const typeB = getType(valueB)

//     if ((typeA === typeB) && (shouldDeepCompare(typeA) && shouldDeepCompare(typeB))) {
//         const entriesA = Object.entries(valueA)
//         const entriesB = Object.entries(valueB)

//         if (entriesA.length !== entriesB.length) return false;

//         return entriesA.every(([k, v]) => Object.hasOwn(valueB, k) && deepEqual(v, valueB[k]))
//     }

//     return Object.is(valueA, valueB)
// }

function deepEqual(valueA, valueB) {

    const typeA = getType(valueA)
    const typeB = getType(valueB)

    if ((typeA === typeB) && (shouldDeepCompare(typeA) && shouldDeepCompare(typeB))) {
        const _valueA = valueA
        const _valueB = valueB

        const entriesA = Object.entries(_valueA)
        const entriesB = Object.entries(_valueB)

        if (entriesA.length !== entriesB.length) return false;

        return entriesA.every(([k, v]) => Object.hasOwn(_valueB, k) && shouldDeepCompare(v, _valueB[k]));
    }

    return Object.is(valueA, valueB);
}

console.log(deepEqual(['1'], ['1']))