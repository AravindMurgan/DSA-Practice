const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

const rows = arr.length
const cols = arr[0].length

for (let r = 0; r < rows.length; ++r) {
    for (let c = 0; c < cols.length; ++c) {
        console.log(arr[r][c]);
    }
}