// Undirected path - edges of two nodes connected to each other eg : a ->  <-b
// directed path - edges of two nodes are not connected to each other a->b

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

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    console.log(graph);
    function hasPath(graph, src, des, visited) {
        if (src === des) return true
        if (visited.has(src)) return false
        visited.add(src)

        for (let neighbour of graph[src]) {
            if (hasPath(graph, neighbour, des, visited)) return true;
        }

        return false
    }

    const result = hasPath(graph, nodeA, nodeB, new Set());
    return result;

}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],

]

console.log(undirectedPath(edges, 'i', 'l'))