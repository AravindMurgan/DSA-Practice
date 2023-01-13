var pacificAtlantic = function (heights) {
    let ROW = heights.length, COL = heights[0].length
    let pos = ''
    let pac = new Set(), atl = new Set()

    function dfs(r, c, visited, prevHeight) {
        const rowBound = r < 0 || r >= ROW
        const colBound = c < 0 || c >= COL
        pos = r + ',' + c
        if (visited.has(pos) || rowBound || colBound ||
            heights[r][c] < prevHeight) return

        visited.add(pos)

        dfs(r - 1, c, visited, heights[r][c])
        dfs(r + 1, c, visited, heights[r][c])
        dfs(r, c - 1, visited, heights[r][c])
        dfs(r, c + 1, visited, heights[r][c])

    }

    for (let c = 0; c < COL; ++c) {
        dfs(0, c, pac, heights[0][c])
        dfs(ROW - 1, c, atl, heights[ROW - 1][c])

        for (let r = 0; r < ROW; ++r) {
            dfs(r, 0, pac, heights[r][0])
            dfs(r, COL - 1, atl, heights[r][c])
        }

    }

    let res = []
    for (let r = 0; r < ROW; ++r) {
        for (let c = 0; c < COL; ++c) {
            pos = r + ',' + c
            if (pac.has(pos) && atl.has(pos)) {
                res.push([r, c])
            }
        }
    }

    console.log(res)
    return res
};

pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]]
)
