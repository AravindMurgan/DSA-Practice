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


/* Factorial Number */
/*
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
*/

/*


/* Pattern - Sliding Window 27/04/2021

function findAverageofSubArray(k,arr){
  const result=[];
  for(leti=0; i<arr.length - k+1; i++){
    sum=0.0;
  for(letj=i; j< i + k ; j++ ){
    sum+=arr[j]
  }
    result.push(sum/k);
  }
  return result
} 

 const answer = findAverageofSubArray(5,[1,3,2,6,-1,2])
 console.log(answer)
/*

/*Slidiing Window Pattern*/
/*
function findAverageofSubArray(k,arr){
  const result=[];
  let windowSum=0;
  let windowStart=0;
  let length = arr.length
  for(let windowEnd = 0; windowEnd < length; windowEnd++){
    windowsSum += arr[windowEnd];
    
    if(windowEnd >= k-1;){
      result.push(windowSum / k);
      windowSum -= arr[windowStart];
      windowStart +=1;
    }
  }
  return result
}

const answer = findAverageofSubArray(5,[1,3,2,6,-1]);

*/

/*3. Find smallest sub array with value greater or value to S

i/p: [1,2,3,4,5] s=9 ;  o/p:[4,5] 

*/


function smallestSubArray(arr,s){
  debugger
  let windowSum=0;
  let windowStart=0;
  let minLength= Infinity;
  let length = arr.length;
  for(let windowEnd=0; windowEnd < length; windowEnd++){
    windowSum += arr[windowEnd]
    
    while(windowSum >= s){
      minLength = Math.min(minLength,windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart +=1;
    }
    
  }
  
  if(minLength === Infinity){
    return 0;
  }
  
  return minLength
  
}

const answer =  smallestSubArray([1,2,3,4,5],9);


let minlen = Math.min(Infinity,3-0 + 1);
console.log(minlen);
























