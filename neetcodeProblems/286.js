var wallsAndGates = function (rooms) {
    if (!rooms || rooms.length === 0) return;
    let m = rooms.length, n = rooms[0].length;
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rooms[i][j] === 0) {
                bfs(i, j, 0, rooms, directions);
            }
        }
    }

    console.log(Input)
};

var bfs = function (i, j, distance, rooms, directions) {
    let m = rooms.length, n = rooms[0].length;
    if (i < 0 || i >= m || j < 0 || j >= n || rooms[i][j] < distance) return;

    rooms[i][j] = distance;
    // for (let dir of directions) {
    //     bfs(i + dir[0], j + dir[1], distance + 1, rooms, directions);
    // }
    bfs(i + 1, j, distance + 1, rooms)
    bfs(i - 1, j, distance + 1, rooms)
    bfs(i, j + 1, distance + 1, rooms)
    bfs(i, j - 1, distance + 1, rooms)

};
// In this solution, we start from each gate and perform a BFS.

Input =
    [
        [2147483647, -1, 0, 2147483647],
        [2147483647, 2147483647, 2147483647, -1],
        [2147483647, -1, 2147483647, -1],
        [0, -1, 2147483647, 2147483647]
    ]
// Output:
// [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
console.log(wallsAndGates(Input))
// Explanation:
// the 2D grid is:
// INF  -1  0  INF
// INF INF INF  -1
// INF  -1 INF  -1
//   0  -1 INF INF
// the answer is:
//   3  -1   0   1
//   2   2   1  -1
//   1  -1   2  -1
//   0  -1   3   4



