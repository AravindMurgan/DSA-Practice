const countComponents = (graph) => {
    let count = 0;
    const visited = new Set()

    for (let node in graph) {
        if (explore(graph, node, visited)) {
            count++
        }
    }

    return count
}

const explore = (graph, node, visited) => {
    if (visited.has(node)) return false
    visited.add(node)

    for (let neighbor of graph[node]) {
        explore(graph, neighbor, visited)
    }

    return true
}



console.log(countComponents({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}))