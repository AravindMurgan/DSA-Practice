const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// const dfsIterative = (graph, source) => {
//     const stack = [source]
//     const result = []
//     while (stack.length > 0) {
//         const current = stack.pop()
//         result.push(current)

//         for (let neighbour of graph[current]) {
//             stack.push(neighbour)
//         }
//     }
//     return result
// }

// let result = []
// const dfsRecurisve = (graph, source) => {
//     result.push(source)

//     for (let neighbour of graph[source]) {
//         dfsRecurisve(graph, neighbour)
//     }
//     console.log(result)
//     return result
// }

const bfs = function (graph, source) {
    const queue = [source]
    const result = []

    while (queue.length > 0) {
        const current = queue.shift()
        result.push(current)

        for (let neighbour of graph[current]) {
            queue.push(neighbour)
        }
    }
    return result
}

console.log(bfs(graph, 'a'))