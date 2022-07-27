// // A number prime or not
// function isPrime(n) {
//     if (n < 2) {
//         return false
//     }

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }




// // 2.isPowerOfTwo
// function isPowerOfTwo(n) {
//     if (n < 1) return false

//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false
//         }
//         n = n / 2
//     }

//     return true
//     //TC: O(logn)
// }

// function isPowerOfTwoBitWise(n) {
//     if (n < 1) return false
//     a = n
//     b = n - 1
//     return (a & b) === 0
//     //TC: O(1)
// }


// // 3.Factorial of a number
// function factorial(n) {
//     if (n == 0) return 1
//     let num = n;
//     for (let i = n - 1; n <= 1; i--) {
//         num = num * i
//     }
//     return num
// }




// ///isFactorial
// function isFactorial(n) {
//     if (n <= 1) return 1
//     let sum = 1;
//     for (let i = 1; i <= n; i++) {
//         sum *= i
//     }

//     return sum
// }



// //20.7.22

// //Factorial with recursion

// function recursiveFactorial(n) {
//     if (n === 0) return 1;

//     return n * recursiveFactorial(n - 1);
// }

// recursiveFactorial(5)

// // 23.7.2022
// // binarySearch- two pointers approach
// // i/p: [1,2,4,6,8] target= 6;
// // op/p: 3
// // function binarySearch(arr, target) {
// //     let leftIdx = 0
// //     let rightIdx = arr.length - 1

// //     while (leftIdx <= rightIdx) {
// //         let middleIdx = Math.floor(leftIdx + rightIdx) / 2

// //         if (target == arr[middleIdx]) return middleIdx

// //         if (target < arr[middleIdx]) {
// //             rightIdx = middleIdx - 1
// //         } else {
// //             leftIdx = middleIdx + 1
// //         }
// //     }

// //     return -1
// // }
// function binarySearch(arr, target) {
//     let leftIdx = 0
//     let rightIdx = arr.length - 1

//     while (leftIdx <= rightIdx) {
//         if (target == arr[leftIdx]) return leftIdx
//         if (target == arr[rightIdx]) return rightIdx

//         leftIdx = leftIdx + 1
//         rightIdx = rightIdx - 1
//     }

//     return -1
// }


// console.log(binarySearch([1, 2, 4, 6, 7, 9, 10], 6))

// //25/2/2022
// function isPrime(n) {
//     if (n < 2) return false

//     for (let i = 2; i <= 9; i++) {
//         if (n % i === 0) return false
//     }

//     return true
// }
// console.log(isPrime(100000))

// function factorial(n) {
//     let result
// }

// var search = function (nums, target) {
//     let leftIdx = 0
//     let rightIdx = nums.length - 1

//     while (leftIdx <= rightIdx) {
//         //         if(nums[leftIdx]=== target) return leftIdx
//         //         if(nums[rightIdx]=== target) return rightIdx

//         //         leftIdx = leftIdx+1
//         //         rightIdx = rightIdx-1
//         let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
//         if (nums[middleIdx] === target) return middleIdx
//         if (target < nums[middleIdx]) {
//             rightIdx = middleIdx - 1
//         } else {
//             lightIdx = middleIdx + 1
//         }



//     }
//     return -1

// };

// search([-1, 0, 3, 5, 9, 12], 9)

//26/2/2022
function bubbleSort(arr) {
    let swapped;


    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            let temp = arr[i]
            if (arr[i] > arr[i + 1]) {
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)

    return arr
}

console.log('bubbleSort:::', bubbleSort([8, 20, -2, 4, - 6])) 
