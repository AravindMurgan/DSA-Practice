// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

	//declaring variable 'chunked' as an empty array
	let chunked = [];
  let summa = [1,2,3,4];

	//for loop iterating through every element of our input array
	for (let ele of array) {
		//declaring variable 'last' as the last index of our 'chunked' array
		const last = chunked[chunked.length - 1];

		//checking if last is undefined or if the last subarray is equal to the size
		if (!last || last.length === size) {
			//then we push the element to be a new subarray in 'chunked'
			chunked.push([ele]);
		} else {
			//if not, then we add the element to the 'last' subarray
			last.push(ele);
		}
	}
	//return the array of subarrays
	return chunked;
}

chunk([1, 2, 3, 4], 2);

module.exports = chunk;



let chulen= [[1,2],[3],[5,58]];
let las = chulen[chulen.length -1]

console.log(las);