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
// const buildGraph = (edges) => {
//     const graph = {}

//     for (let edge of edges) {
//         const [a, b] = edge
//         if (!(a in graph)) graph[a] = []
//         if (!(b in graph)) graph[b] = []
//         graph[a].push(b)
//         graph[b].push(a)
//     }

//     return graph
// }

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
// const connectedComponents = (graph) => {
//     const visited = new Set()
//     let count = 0;

//     function dfs(graph, node) {
//         if (visited.has(String(node))) return
//         visited.add(String(node))

//         for (let neighbor of graph[node]) {
//             dfs(graph, neighbor)
//         }

//         return true
//     }

//     for (let node in graph) {
//         if (dfs(graph, node)) count += 1
//     }


//     return count

// }

// graph = {
//     0: [8, 1, 5],
//     1: [0],
//     5: [0, 8],
//     8: [0, 5],
//     2: [3, 4],
//     3: [2, 4],
//     4: [3, 2]
// }

// console.log(connectedComponents(graph))

// 4.Largest Component
// const largestComponent = (graph) => {
//     const visited = new Set()
//     let count = 0;

//     function dfs(node) {
//         if (visited.has(String(node))) return 0
//         visited.add(String(node))

//         let size = 1

//         for (let neighbor of graph[node]) {
//             size += dfs(neighbor)
//         }

//         return size
//     }

//     for (let node in graph) {
//         const result = dfs(node)
//         count = Math.max(count, result)
//     }

//     return count
// }

// console.log(largestComponent({
//     0: ['8', '1', '5'],
//     1: ['0'],
//     5: ['0', '8'],
//     8: ['0', '5'],
//     2: ['3', '4'],
//     3: ['2', '4'],
//     4: ['3', '2']
// })) // -> 4

// 5. Shortest Path

// const buildGraph = (edges) => {
//     const graph = {}

//     for (let edge of edges) {
//         const [a, b] = edge
//         if (!(a in graph)) graph[a] = []
//         if (!(b in graph)) graph[b] = []
//         graph[a].push(b)
//         graph[b].push(a)
//     }

//     return graph
// }

// const shortestPath = (edges, nodeA, nodeB) => {
//     const graph = buildGraph(edges)
//     const visited = new Set()

//     const queue = [[nodeA, 0]]
//     while (queue.length > 0) {
//         const [node, distance] = queue.shift()

//         if (node === nodeB) return distance

//         for (let neighbor of graph[node]) {
//             if (!(visited.has(neighbor))) {
//                 visited.has(neighbor)
//                 queue.push(neighbor, distance + 1)
//             }

//         }
//     }
// }

// const edges = [
//     ['w', 'x'],
//     ['x', 'y'],
//     ['z', 'y'],
//     ['z', 'v'],
//     ['w', 'v']
// ];

// shortestPath(edges, 'w', 'z');

// 6. Island Count
// const islandCount = (graph) => {
//     const visited = new Set()
//     const ROW = graph.length
//     const COL = graph[0].length
//     let count = 0

//     function dfs(r, c) {
//         let pos = r + ',' + c
//         const rowBound = r < 0 || r >= ROW;
//         const colBound = c < 0 || c >= COL;

//         if (visited.has(pos) || rowBound || colBound) return
//         visited.add(pos)

//         if (graph[r][c] == 'W') return

//         dfs(r - 1, c)
//         dfs(r + 1, c)
//         dfs(r, c - 1)
//         dfs(r, c + 1)
//         return true
//     }

//     for (let r = 0; r < ROW; ++r) {
//         for (let c = 0; c < COL; ++c) {
//             if (graph[r][c] === 'L') {
//                 if (dfs(r, c)) count += 1
//             }
//         }
//     }

//     return count
// }
// const grid = [
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'W', 'W', 'L', 'W'],
//     ['W', 'W', 'L', 'L', 'W'],
//     ['L', 'W', 'W', 'L', 'L'],
//     ['L', 'L', 'W', 'W', 'W'],
// ];
// console.log(islandCount(grid))

const minimumIsland = (graph) => {
    const visited = new Set()
    const ROW = graph.length
    const COL = graph[0].length
    let count = Infinity;

    function dfs(r, c) {
        const pos = r + ',' + c
        const rowBound = r < 0 || r >= ROW;
        const colBound = c < 0 || c >= COL;

        if (colBound || rowBound || graph[r][c] === 'W') return 0


        if (visited.has(pos)) return 0
        visited.add(pos)
        let size = 1

        size += dfs(r - 1, c)
        size += dfs(r + 1, c)
        size += dfs(r, c - 1)
        size += dfs(r, c + 1)

        return size
    }

    for (let r = 0; r < ROW; ++r) {
        for (let c = 0; c < COL; ++c) {
            if (graph[r][c] === 'L') {
                let result = dfs(r, c)
                if (result) {
                    count = Math.min(result, count)
                }


            }
        }
    }
    console.log('count:::', count)
    return count
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid))