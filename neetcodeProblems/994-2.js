var orangesRotting = function (grid) {
    let minutes = 0;
    let freshOranges = 0;
    let queue = [];
    let rows = grid.length;
    let cols = grid[0].length;

    // count fresh oranges and add rotten oranges to queue
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshOranges++;
            }
        }
    }

    // use BFS to rot the oranges
    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let orange = queue.shift();
            let row = orange[0];
            let col = orange[1];

            // check up
            if (row > 0 && grid[row - 1][col] === 1) {
                grid[row - 1][col] = 2;
                freshOranges--;
                queue.push([row - 1, col]);
            }
            // check down
            if (row < rows - 1 && grid[row + 1][col] === 1) {
                grid[row + 1][col] = 2;
                freshOranges--;
                queue.push([row + 1, col]);
            }
            // check left
            if (col > 0 && grid[row][col - 1] === 1) {
                grid[row][col - 1] = 2;
                freshOranges--;
                queue.push([row, col - 1]);
            }
            // check right
            if (col < cols - 1 && grid[row][col + 1] === 1) {
                grid[row][col + 1] = 2;
                freshOranges--;
                queue.push([row, col + 1]);
            }
        }
        if (queue.length > 0) {
            minutes++;
        }
    }

    if (freshOranges > 0) {
        return -1;
    } else {
        return minutes;
    }
};
grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
orangesRotting(grid)