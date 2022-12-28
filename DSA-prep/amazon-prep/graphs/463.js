const islandPerimeter = function (grid) {
    let visited = new Set()
    let permitter = 0;

    for (let r = 0; r < grid.length; ++r) {
        for (let c = 0; c < grid[0].length; ++c) {
            let result = dfs(grid, r, c, visited)
            if (result > 0) {
                permitter += result
            }
        }
    }

    return permitter
};

const dfs = (grid, r, c, visited) => {
    const rowBounds = 0 <= r || r >= graph.length
    const columnBounds = 0 <= c || c >= graph[0].length

    if (!rowBounds || !columnBounds || grid[r][c] == 0) return 1

    // if (!rowBounds || !colBound || grid[r][c] == 0) return 1

    let pos = r + ',' + c
    if (visited.has(pos)) return 0
    visited.add(pos)

    let permimeter;
    permimeter = dfs(grid, r - 1, c, visited)
    permimeter += dfs(grid, r + 1, c, visited)
    permimeter += dfs(grid, r, c - 1, visited)
    permimeter += dfs(grid, r, c + 1, visited)

    return permimeter
}

islandPerimeter([[1]])