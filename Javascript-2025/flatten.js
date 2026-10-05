// function flatten(arr) {
//     const result = arr.reduce(function (acc, curr) {

//         const val = acc.concat(Array.isArray(curr) ? flatten(curr) : curr)
//         return val
//     }, [])

//     return result
// }

// flatten([1, [2]])

// flatten-debug.js

function flatten(value, depth = 0) {
    console.log("▶️ flatten called at depth:", depth, "with:", value);

    const result = [];

    for (let i = 0; i < value.length; i++) {
        const curr = value[i];
        console.log("  index:", i, "| curr:", curr);

        if (Array.isArray(curr)) {
            console.log("  -> curr is an array, calling flatten again…");
            const flatChild = flatten(curr, depth + 1);
            console.log("  <- returned from depth", depth + 1, "with:", flatChild);
            result.push(...flatChild);
        } else {
            console.log("  -> curr is a value, pushing:", curr);
            result.push(curr);
        }

        console.log("  result so far:", result);
    }

    console.log("✅ returning from depth:", depth, "with:", result);
    return result;
}

const input = [
    { id: 1, name: "a" },
    [
        { id: 2, name: "b" },
        { id: 3, name: "c" },
        [
            { id: 4, name: "d" },
            [{ id: 5, name: "e" }]
        ]
    ],
    { id: 6, name: "f" }
];
const output = flatten(input);
console.log("🎯 FINAL OUTPUT:", output);
