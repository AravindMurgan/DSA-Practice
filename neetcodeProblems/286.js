// // var wallsAndGates = function (rooms) {
// //     if (!rooms || rooms.length === 0) return;
// //     let m = rooms.length, n = rooms[0].length;
// //     let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

// //     for (let i = 0; i < m; i++) {
// //         for (let j = 0; j < n; j++) {
// //             if (rooms[i][j] === 0) {
// //                 bfs(i, j, 0, rooms, directions);
// //             }
// //         }
// //     }

// //     console.log(Input)
// // };

// // var bfs = function (i, j, distance, rooms, directions) {
// //     let m = rooms.length, n = rooms[0].length;
// //     if (i < 0 || i >= m || j < 0 || j >= n || rooms[i][j] < distance) return;

// //     rooms[i][j] = distance;
// //     // for (let dir of directions) {
// //     //     bfs(i + dir[0], j + dir[1], distance + 1, rooms, directions);
// //     // }
// //     bfs(i + 1, j, distance + 1, rooms)
// //     bfs(i - 1, j, distance + 1, rooms)
// //     bfs(i, j + 1, distance + 1, rooms)
// //     bfs(i, j - 1, distance + 1, rooms)

// // };
// // // In this solution, we start from each gate and perform a BFS.

// // Input =
// //     [
// //         [2147483647, -1, 0, 2147483647],
// //         [2147483647, 2147483647, 2147483647, -1],
// //         [2147483647, -1, 2147483647, -1],
// //         [0, -1, 2147483647, 2147483647]
// //     ]
// // // Output:
// // // [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
// // console.log(wallsAndGates(Input))
// // // Explanation:
// // // the 2D grid is:
// // // INF  -1  0  INF
// // // INF INF INF  -1
// // // INF  -1 INF  -1
// // //   0  -1 INF INF
// // // the answer is:
// // //   3  -1   0   1
// // //   2   2   1  -1
// // //   1  -1   2  -1
// // //   0  -1   3   4




// const wallsAndGates = (rooms) => {
//     // write your code here
//     const rows = rooms.length
//     if (rows === 0) return

//     const cols = rooms[0].length
//     if (cols === 0) return


//     const walk = (i, j, distance) => {
//         // Array<[x, y, distance]>
//         const queue = [[i, j, distance]]

//         let head
//         while (head = queue.shift()) {
//             const [i, j, distance] = head
//             if (rooms[i][j] > distance || rooms[i][j] === 0) {
//                 rooms[i][j] = distance

//                 const nextDistance = distance + 1
//                 // push the next possible coordinates in
//                 if (i > 0 && rooms[i - 1][j] > nextDistance) {
//                     queue.push([i - 1, j, nextDistance])
//                 }

//                 if (i + 1 < rows && rooms[i + 1][j] > nextDistance) {
//                     queue.push([i + 1, j, nextDistance])
//                 }

//                 if (j > 0 && rooms[i][j - 1] > nextDistance) {
//                     queue.push([i, j - 1, nextDistance])
//                 }

//                 if (j + 1 < cols && rooms[i][j + 1] > nextDistance) {
//                     queue.push([i, j + 1, nextDistance])
//                 }
//             }
//         }
//     }


//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (rooms[i][j] === 0) {
//                 walk(i, j, 0)
//             }
//         }
//     }

//     return rooms
// }
var twoSum = function(nums, target) {
    const map = {}

    for(let i=0; i<nums.length ; ++i){
        if(map[target-nums[i]]){
            return [map[target - nums[i]],i]
        }else{
            map[nums[i]]=i
        }
    }
    console.log(map[7-2])
    for(let key in map){
        console.log(typeof key, key, map[key])
    }
    return []
};

twoSum([2,7,11,15],9)

