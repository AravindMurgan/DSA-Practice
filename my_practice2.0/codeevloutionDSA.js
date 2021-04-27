/*Two Sums  26/4/21*/
// Number one coding quesiton asked  by pretty much all the major tech companies.
// Question: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// example : nums = [2, 7, 11, 15], target = 9 => returns [0, 1]
// Data Samples :
//Edge Case => []
//Edge Case => [1,1]
//Unusual => [2,2,2,7,7,7] any pair of 2,7 would be acceptable
//complexity?
//brute force and optimal solution
/*
const nums = [2,2,2,7,7,7]

function twoSum(nums, target) {
  let comp = new Map();
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
}

console.log(twoSum(nums, 9))

const nums=[2,7,5,11];

twoSums(nums,9)
*/

/* Factorial Number */

function factorial(n) {
	let answer = 1;
	if (n === 0 || n === 1) {
		return 1;
	}

	for (let i = n; n >= 1; i--) {
		answer = answer * 1;
	}

	return answer;
}

factorial(4);

const myapp = 'adasd';
console.log(myapp);
