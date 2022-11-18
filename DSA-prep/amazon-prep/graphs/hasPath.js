const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

// function hasPath(graph, src, dst) {
//     if (src == dst) return true

//     for (let neighbour of graph[src]) {
//         if (hasPath(graph, neighbour, dst)) return true
//     }

//     return false
// }

// const hasPath = (graph, src, des) => {
//     if (!graph) return false;

//     const stack = [src];
//     while (stack.length > 0) {
//         const current = stack.pop()
//         if (current == des) return true
//         for (let neighbour of graph[current]) {
//             stack.push(neighbour)
//         }
//     }

//     return false

// }

const hasPath = (graph, src, des) => {
    if (src === des) return true;

    for (let neighbour of graph[src]) {
        if (hasPath(graph, neighbour, des)) return true
    }

    return false
}

console.log(hasPath(graph, 'j', 'f'))