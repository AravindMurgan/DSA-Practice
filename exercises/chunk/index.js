// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//  const output = chunk([1,2,3,5,7,8,9],2);
//  console.log(output);
// function chunk(array, size) {
//     let chunked = [];
//     while (array.length !== 0) {
//         chunked.push(array.splice(0, size));
//     }
//     return chunked;
// }

// function chunk(array, size) {
//     return Array.from({ length: Math.ceil(array.length / size) }, (v, i) => array.slice(i * size, i * size + size));
// }

////Chunked Array///

const output = chunk([1,2,3],2);
console.log(output);

function chunk(array,size){
    const chunked = [];
 
 for(let element of array){
     const last = chunked[chunked.length -1];

     if(!last || chunked.length === size){
        chunked.push([element])
     }else{
         console.log(last.push(element));
        last.push(element);
     }

 }
 return chunked;
}