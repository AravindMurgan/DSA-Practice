const islandCount = (graph) => {
    const visited = new Set()
    const count = 0;
    for (let r = 0; r < graph.length; ++r) {
        for (let c = 0; c < graph[0].length; ++c) {
            if (explore(graph, r, c, visited)) count++
        }
    }
    return count
}

const explore = (graph, r, c, visited) => {
    const rowBounds = 0 <= r && r < graph.length
    const columnBounds = 0 <= c && c < graph[0].length

    if (!rowBounds || !columnBounds) return false

    if (graph[r][c] === 'W') return false

    const pos = r + ',' + c
    if (visited.has(pos)) return false
    visited.add(pos)

    explore(graph, r - 1, c, visited)
    explore(graph, r + 1, c, visited)
    explore(graph, r, c - 1, visited)
    explore(graph, r, c + 1, visited)

    return true
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid); //