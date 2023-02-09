// Graphs Revision
// 1.hasPath

// DFS
// const hasPath = (graph, src, dst) => {
//     if (src === dst) return true

//     for (let neighbor of graph[src]) {
//         if (hasPath(graph, neighbor, dst)) return true
//     }

//     return false
// }


// console.log(hasPath(graph, 'f', 'k'))

//BFS
// const hasPath = (graph, src, dst) => {
//     const queue = [src]

//     while (queue.length > 0) {
//         const current = queue.shift()
//         if (current === dst) return true

//         for (let neighbor of graph[current]) {
//             queue.push(neighbor)
//         }
//     }

//     return false
// }
// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
// }
// console.log(hasPath(graph, 'f', 'k'))

// 2. undirected Path
const buildGraph = (edges) => {
    const graph = {}

    for (let edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

// const undirectedPath = (edges, nodeA, nodeB) => {
//     const graph = buildGraph(edges)
//     const visited = new Set()

//     function dfs(graph, nodeA) {
//         if (visited.has(nodeA)) return;
//         visited.add(nodeA);

//         if (nodeA === nodeB) return true

//         for (let neighbor of graph[nodeA]) {
//             if (dfs(graph, neighbor)) return true
//         }

//         return false
//     }
//     return dfs(graph, nodeA)
// }

// const edges = [
//     ['i', 'j'],
//     ['k', 'i'],
//     ['m', 'k'],
//     ['k', 'l'],
//     ['o', 'n']
// ];

// console.log(undirectedPath(edges, 'k', 'o'))

// 3. connected components
const connectedComponents = (graph) => {
    const visited = new Set()
    let count = 0;

    function dfs(graph, node) {
        if (visited.has(String(node))) return
        visited.add(String(node))

        for (let neighbor of graph[node]) {
            dfs(graph, neighbor)
        }

        return true
    }

    for (let node in graph) {
        if (dfs(graph, node)) count += 1
    }


    return count

}

graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}

console.log(connectedComponents(graph))