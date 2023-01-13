const minimumIsland = (grid) => {
    const visited = new Set()
    let minSize = Infinity;
    for (let r = 0; r < grid.length; ++r) {
        for (let c = 0; c < grid[0].length; ++c) {
            const size = dfs(grid, r, c, visited)
            minSize = Math.min(minSize, size)
            console.log('miSize', minSize
            )
        }
    }

    return minSize
}

const dfs = (grid, r, c, visited) => {
    const rowBound = r < 0 || r >= grid.length;
    const colBound = c < 0 || c >= grid[0].length;

    if (rowBound || colBound || grid[r][c] == 'W') return 0

    const pos = r + ',' + c
    if (visited.has(pos)) return 0
    visited.add(pos)

    let size = 1


    size += dfs(grid, r - 1, c, visited)
    size += dfs(grid, r, c - 1, visited)
    size += dfs(grid, r + 1, c, visited)
    size += dfs(grid, r, c + 1, visited)

    return size
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