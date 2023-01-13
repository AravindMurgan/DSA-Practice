const islandCount = (grid) => {
    const visited = new Set()
    let count = 0
    for (let r = 0; r < grid.length; ++r) {
        for (let c = 0; c < grid[0].length; ++c) {
            if (dfs(grid, r, c, visited)) count += 1
        }
    }
    return count
}

const dfs = (grid, r, c, visited) => {
    const rowBound = r < 0 || r >= grid.length
    const columnBound = c < 0 || c >= grid[0].length

    if (rowBound || columnBound || grid[r][c] == 'W') return false

    const pos = r + ',' + c
    if (visited.has(pos)) return false
    visited.add(pos)

    dfs(grid, r - 1, c, visited)
    dfs(grid, r + 1, c, visited)
    dfs(grid, r, c - 1, visited)
    dfs(grid, r, c + 1, visited)

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

islandCount(grid)