// const islandPerimeter = function (grid) {
//     let visited = new Set()
//     let permitter = 0;

//     for (let r = 0; r < grid.length; ++r) {
//         for (let c = 0; c < grid[0].length; ++c) {
//             let result = dfs(grid, r, c, visited)
//             if (result > 0) {
//                 permitter += result
//             }
//         }
//     }

//     return permitter
// };

// const dfs = (grid, r, c, visited) => {
//     const rowBounds = 0 <= r || r >= graph.length
//     const columnBounds = 0 <= c || c >= graph[0].length

//     if (!rowBounds || !columnBounds || grid[r][c] == 0) return 1

//     // if (!rowBounds || !colBound || grid[r][c] == 0) return 1

//     let pos = r + ',' + c
//     if (visited.has(pos)) return 0
//     visited.add(pos)

//     let permimeter;
//     permimeter = dfs(grid, r - 1, c, visited)
//     permimeter += dfs(grid, r + 1, c, visited)
//     permimeter += dfs(grid, r, c - 1, visited)
//     permimeter += dfs(grid, r, c + 1, visited)

//     return permimeter
// }

// islandPerimeter([[1]])

var islandPerimeter = function (grid) {
    let visited = new Set()
    let result = 0;
    function dfs(r, c) {
        const rowBound = r < 0 || r >= grid.length
        const colBound = c < 0 || c >= grid[0].length

        if (rowBound || colBound || grid[r][c] == 0) return 1

        const pos = r + ',' + c
        if (visited.has(pos)) return 0
        visited.add(pos)

        let permin;
        permin = dfs(r - 1, c)
        permin += dfs(r, c - 1)
        permin += dfs(r + 1, c)
        permin += dfs(r, c + 1)

        return permin
    }
    for (let r = 0; r < grid.length; ++r) {
        for (let c = 0; c < grid[0].length; ++c) {
            if (grid[r][c]) return dfs(r, c)
        }
    }
    return result
};
const grid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
]
islandPerimeter(grid)