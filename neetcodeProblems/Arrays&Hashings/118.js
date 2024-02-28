// var generate = function (numRows) {
//     // var i = 0;
//     // var j = 0;
//     // Create an array list to store the output result...
//     var res = [];
//     // For generating each row of the triangle...
//     for (i = 0; i < numRows; i++) {
//         res.push(Array(i + 1));       // Initialize the first row of the pascal triangle as {1}...
//         for (j = 0; j <= i; j++) {
//             // Primary...
//             if (j === 0 || j === i) {
//                 res[i][j] = 1;
//             }
//             else {
//                 // Calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
//                 res[i][j] = res[i - 1][j - 1] + res[i - 1][j];

//             }
//         }
//     }
//     return res;      // Return the output list of pascal values...
// };

// var generate = function (numRows) {
//     const result = []

//     for (let i = 0; i < numRows.length; ++i) {
//         result.push(Array(i + 1))

//         for (let j = 0; j <= i; ++j) {
//             if (j === 0 || j === i) {
//                 result[i][j] = 1
//             } else {
//                 result[i][j] = result[i - 1][j] + result[i - 1][j - 1]
//             }
//         }
//     }

//     return result
// };

var generate = function(numRows) {
    let res=[[1]]

    for(let i=1 ; i<numRows; ++i){
        let temp = [0,...res[res.length-1],0];
        let row=[]
        for(let j=0 ; j< temp.length-1 ; ++j){
            row.push(temp[j]+temp[j+1]);                 
        }
         res.push(row);
    }

    return res
};

console.log(generate(5))

