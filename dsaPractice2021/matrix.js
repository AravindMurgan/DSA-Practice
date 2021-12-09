// // --- Directions
// // Write a function that accepts an integer N
// // and returns a NxN spiral matrix.
// // --- Examples
// //   matrix(2)
// //     [[undefined, undefined],
// //     [undefined, undefined]]
// //   matrix(3)
// //     [[1, 2, 3],
// //     [8, 9, 4],
// //     [7, 6, 5]]
// //  matrix(4)
// //     [[1,   2,  3, 4],
// //     [12, 13, 14, 5],
// //     [11, 16, 15, 6],
// //     [10,  9,  8, 7]]
// function matrix(n) {
//     let square = [];
//     let sqSize = n;
//     let startPoint = 0;
//     let row;
//     let col;
//     let counter = 1;
//     // ===== CREATE EMPTY FRAMEWORK =====
//     for (let i=0; i<n; i++) {
//       square.push([]);
//     }
//     // ===== SQUARE =====
//     // Think of this as working through a series of nested squares (like Russian dolls)
//     // example: for a square of size n, do a 7x7 square, then a 5x5 inside that, then a 3x3
//     // inside that, then a 1x1 at the very middle
//     // For your first square, you will start at 0,0
//     // For the next square (nestled inside that one), you start at 1,1
//     // For the next square (nestled inside that one), you start at 2,2
//     // etc....
//     debugger
//     for (let i = sqSize; i >= 1; i -= 2) {
//       row = startPoint;
//       col = startPoint;
//       // TOP
//       for (let j = startPoint; j < startPoint + sqSize; j++) {
//         square[row][j] = counter;
//         console.log(`top: [${row},${j}] is ${square[row][j]}`);
//         counter++;
//         col = j;
//       }
//       // RIGHT
//       for (let j = row + 1; j < startPoint + sqSize; j++) {
//         square[j][col] = counter;
//         console.log(`right: [${j},${col}] is ${square[j][col]}`);
//         counter++;
//         row = j;
//       }
//       // BOTTOM
//       for (let j = row - 1; j >= startPoint; j--) {
//         square[row][j] = counter;
//         console.log(`bottom: [${row},${j}] is ${square[row][j]}`);
//         counter++;
//         col = j;
//       }
//       // LEFT
//       for (let j = row - 1; j >= startPoint + 1; j--) {
//         square[j][col] = counter;
//         console.log(`left: [${j},${col}] is ${square[j][col]}`);
//         counter++;
//         row = j;
//       }
//       // decrement square size and startpoint to begin the next nested square
//       sqSize-=2;
//       startPoint++;
//       if (sqSize <= 0) {
//         console.log(square);
//       }
//     } // outer loop of squares
//   } //function

//   matrix(3)


function matrix(n){
  
  let results = [];

  for(let i=0; i<n; i++){
    results.push([])
  }

  //variables for iteration
  let startRow=0;
  let endRow=n-1;
  let startColumn=0;
  let endColumn=n-1;
  let counter=1;

  debugger
  //edge case for iterating nested squares
  while(startRow<=endRow && startColumn<=endColumn){

    //top
    for(let i=startColumn; i<= endColumn; i++){
      results[startRow][i]=counter;
      counter++
    }
    //nextRow
    startRow++

    ///right
    for(let i = startRow; i<=endRow; i++){
      results[i][endColumn]=counter
      counter++
    }

    endColumn--

    //bottom//
    for(let i=endColumn; i>= startColumn ; i--){
      results[endRow][i]=counter
      counter++
    }

    endRow--

    //left
    for(let i=endRow; i>=startRow; i-- ){
      results[i][startColumn]=counter;
      counter++
    }

    startColumn++
  }

  console.log(results)
}

matrix(3)