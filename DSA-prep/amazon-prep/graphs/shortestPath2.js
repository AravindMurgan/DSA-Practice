const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    const visited = new Set([nodeA])

    console.log(graph)
    const queue = [[nodeA, 0]]
    while (queue.length > 0) {
        const current = queue.shift()
        const [node, distance] = current

        if (node === nodeB) return distance

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                queue.push([neighbor, distance + 1])
                visited.add(neighbor)
            }
        }
    }

    return -1
}

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

const edges = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e'],
];
console.log(shortestPath(edges, 'w', 'e'))