/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const visited = new Set()
    const ROW = board.length
    const COL = board[0].length
    let pos = ''

    function dfs(r, c) {
        const rowBound = r < 0 || r >= ROW
        const colBound = c < 0 || c >= COL
        pos = r + ',' + c
        if (rowBound || colBound || !visited.has(pos) || board[r][c] == 'X'
            || visited.add(pos)) return;

        dfs(r - 1, c)
        dfs(r, c - 1)
        dfs(r + 1, c)
        dfs(r, c + 1)
    }


    for (let r = 0; r < ROW; ++r) {
        for (let c = 0; c < COL; ++c) {
            const firstLastRow = r == 0 || r == ROW - 1
            const firstLastCol = c == 0 || c == COL - 1

            if ((firstLastRow || firstLastCol) && board[r][c] == 'O') {
                dfs(r, c)
            }
        }
    }

    for (let r = 0; r < ROW; ++r) {
        for (let c = 0; c < COL; ++c) {
            pos = r + ',' + c
            if (!visited.has(pos) && board[r][c] == 'O') {
                board[r][c] == 'X'
            }
        }
    }

    return board
};

solve(
    [["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"]]
)