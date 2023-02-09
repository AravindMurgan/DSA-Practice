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

const numberOfConnectedComponents = (n, edges) => {
    const graph = buildGraph(edges)
    console.log(graph)
    const visited = new Set()
    let count = 0;
    function dfs(node) {
        if (visited.has(node)) return false
        visited.add(node)

        for (let neighbor of graph[node]) {
            dfs(neighbor)
        }
        return true
    }

    for (let node in graph) {
        if (dfs(parseInt(node))) count += 1
    }

    return count
}
console.log(numberOfConnectedComponents(5, [[0, 1], [1, 2], [3, 4], [8, 9], [22, 34]]))