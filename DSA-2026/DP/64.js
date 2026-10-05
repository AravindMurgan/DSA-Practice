function minPathSum(grid) {
    const m = grid.length
    const n = grid[0].length
    const dp = Array.from({ length: m }, () => Array(n).fill(-1));
    function func(m, n) {
        if (m === 0 && n === 0) {
            console.log('grid[0][0]', grid)
            return grid[0][0]
        }
        if (m < 0 || n < 0) {
            console.log('0');
            return 0
        }

        if (dp[m][n] !== -1) {
            console.log('dp[m][n]', dp)
            return dp[m][n]
        }

        let up = func(m - 1, n) + grid[m][n]
        let left = func(m, n - 1) + grid[m][n]

        dp[m][n] = Math.min(up, left)
        console.log('dp[m][n]', dp)
        return dp[m][n]
    }

    return func(m - 1, n - 1)
};

grid = [[1, 2, 3], [4, 5, 6]]
minPathSum(grid);

1 2 3
4 5 6