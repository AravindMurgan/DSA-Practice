const largestComponent = (graph) => {
    let visited = new Set()
    let max = 0;
    for (let node in graph) {
        const result = explore(graph, node, visited)
        max = Math.max(result, max)
    }

    return max
}

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return 0
    visited.add(String(current))
    let size = 1;

    for (let neighbor of graph[current]) {
        size += explore(graph, neighbor, visited)
    }

    return size
}




console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
}))