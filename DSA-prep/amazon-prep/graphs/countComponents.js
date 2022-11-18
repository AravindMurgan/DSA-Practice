const countComponents = (graph) => {
    let visited = new Set()
    let count = 0;

    for (let node in graph) {
        if (exploreNode(node, graph, visited)) {
            count++
        }
    }

    return count
}

const exploreNode = (node, graph, visited) => {
    if (visited.has(String(node))) return false

    visited.add(String(node));

    for (let neighbour of graph[node]) {
        exploreNode(neighbour, graph, visited)
    }


    return true
}

let graph = {
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
} // -> 3

console.log(countComponents(graph))