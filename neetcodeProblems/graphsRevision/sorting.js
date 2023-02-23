const data = {
    "getVz": [],
    "billing": [
        {
            priority: 4
        }
    ],
    "hero": [
        {
            priority: 3
        }
    ],
    "vilan": [
        {
            priority: 2
        }
    ],
    "virat": [
        {
            priority: 1
        }
    ]
}

const sortedData = Object.entries(data)
    .sort(([keyA, valA], [keyB, valB]) => {
        const a = valA.length > 0 ? valA[0].priority : Infinity;
        const b = valB.length > 0 ? valB[0].priority : Infinity;
        return a - b;
    })
    .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});

console.log(sortedData);