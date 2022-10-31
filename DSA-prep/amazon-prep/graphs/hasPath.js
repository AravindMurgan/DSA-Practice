const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

function hasPath(graph, src, dst) {
    if (src == dst) return true

    for (let neighbour of graph[src]) {
        if (hasPath(graph, neighbour, dst)) return true
    }

    return false
}

console.log(hasPath(graph, 'f', 'k'))