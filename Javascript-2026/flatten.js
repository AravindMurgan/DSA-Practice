// export default function flatten(value) {

//     for (let i = 0; i < value.length;) {
//         if (Array.isArray(value[i])) {
//             value.splice(i, 1, ...value[i])
//         } else {
//             i += 1
//         }
//     }

//     return value
// }

export default function flatten(value) {

    return value.reduce((prev, curr) => prev.concat(Array.isArray(curr) ? flatten(curr) : curr), [])
}

flatten([0, 1, 2, [3, 4]]);