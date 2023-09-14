var gridGame = function (grid) {

    let cols = grid[0].length, ans = Infinity;
    let res = Array(2).fill().map(_ => Array(cols).fill(0));

    //PREFIX SUM FROM FROM LEFT TO RIGHT FOR 2ND ROW
    for (let j = 0; j < cols; j++)
        res[1][j] = j - 1 >= 0 ?
            res[1][j - 1] + grid[1][j] :

            grid[1][j];

    //PREFIX SUM FROM FROM RIGHT TO LEFT FOR 1ST ROW
    for (let j = cols - 1; j >= 0; j--)
        res[0][j] = j + 1 < cols ?
            res[0][j + 1] + grid[0][j] :
            grid[0][j];

    for (let j = 0; j < cols; j++) {
        let rightTop = j + 1 < cols ? res[0][j + 1] : 0
        let leftBottom = j - 1 >= 0 ? res[1][j - 1] : 0
        ans = Math.min(Math.max(rightTop, leftBottom), ans);
    }

    return ans
};
grid = [[1, 3, 1, 15], [1, 3, 3, 1]]
gridGame(grid)

fucntion helloWorld(test){

    const hello = "world of string"
    const name = "Aravind Murugan"

    console.log("print this message")
}