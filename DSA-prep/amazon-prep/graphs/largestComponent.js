let graph = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
}

const largestComponent = (graph) => {
    let max = 0;
    for (let node in graph) {
        const result = exploreSize(graph, node, new Set());
        max = Math.max(result, max)
    }



    return max;
}

const exploreSize = (graph, node, visited) => {
    if (visited.has(node)) return 0

    visited.add(node);
    let size = 1;

    for (let neighbour of graph[node]) {
        size += exploreSize(graph, neighbour, visited)
    }

    return size
}