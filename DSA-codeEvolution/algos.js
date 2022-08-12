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

//27/2/2022
// //i/p:[8,20,-2,4,-6] o/p:[-6,-2,4,8,20]
// function quickSort(arr) {
//     //baseCase
//     if (arr.length < 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort([8, 20, -2, 4, -6]))


//1/8/22
//i/p:[8,20,-2,4,-6] o/p:[-6,-2,4,8,20]
// function mergeSort(arr, key) {
//     // baseCase
//     console.log('::::==>>>', key)
//     if (arr.length < 2) {
//         return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0, mid)
//     const rightArr = arr.slice(mid)

//     return merge(mergeSort(leftArr, 'leftArr'), mergeSort(rightArr, 'rightArr'), 'MERGE')
// }

// function merge(leftArr, rightArr, key) {
//     console.log('leftArr:::', leftArr)
//     console.log('rightArr:::', rightArr)
//     console.log('KEY:::', key)

//     const sortedArr = []
//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] <= rightArr[0]) {
//             sortedArr.push(leftArr.shift())
//         } else {
//             sortedArr.push(rightArr.shift())
//         }
//     }

//     return [...sortedArr, ...leftArr, ...rightArr]
// }

// console.log('OUTPUT:::', mergeSort([8, 20, -2, 4, -6]))

// //2/8/22
// function mergeSort(arr, key) {
//     //bc
//     console.log(key)
//     if (arr.length < 2) {
//         return arr
//     }

//     const mid = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0, mid)
//     const rightArr = arr.slice(mid)

//     return merge(mergeSort(leftArr, 'im left'), mergeSort(rightArr, 'im right'), 'im merge')
// }

// function merge(leftArr, rightArr, key) {
//     const sortedArr = []
//     console.log(key)
//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] <= rightArr[0]) {
//             sortedArr.push(leftArr.shift())
//         } else {
//             sortedArr.push(rightArr.shift())
//         }
//     }

//     return [...sortedArr, ...leftArr, ...rightArr]
// }

// console.log(mergeSort([8, 20, -2, 4, -6]))

// //4/8/2022
// function bubbleSort(arr) {
//     let swap = false
//     do {
//         swap = false
//         for (let i = 0; i < arr.length; i++) {
//             let temp = arr[i]
//             if (temp > arr[i + 1]) {
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swap = true
//             }
//         }
//     } while (swap)
//     return arr
// }

// console.log('BS::::', bubbleSort([8, 20, -2, 4, -6]))

//5/8/2022
// function insertionSort(nums) {

//     for (let i = 1; i < nums.length; i++) {
//         for (let j = i; j >= 0; j--) {
//             if (nums[j] < nums[j - 1]) {
//                 [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
//             } else {
//                 break
//             }
//         }
//     }

//     return nums
// }

// function insertionSort2(arr) {
//     for (let i = 1; i < arr.length; i++) {

//         let j = i - 1
//         while (j >= 0 && arr[j] > arr[i]) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j + 1] = arr[i]

//     }

//     return arr
// }

// console.log('IS:::', insertionSort([8, 20, -2, 4, -6]))
// console.log('IS:::', insertionSort2([8, 20, -2, 4, -6]))


// function quickSort(arr) {
//     //bc//
//     if (arr.length < 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left), ...pivot, ...quickSort(right)]
// }

// console.log('op::',quickSort())

//cartesian product
// i/p: [1,2] [3,4]  o/p:[[1,3],[1,4],[2,3],[2,4]]
// function cartesianProduct(arr1, arr2) {
//     let result = []
//     for (let i of arr1) {
//         for (let j of arr2) {
//             result.push([i, j])
//         }
//     }
//     return result
// }

// console.log('CP:::', cartesianProduct([1, 2], [3, 4]))

//9/8/22
// climbing stairs : find no of ways to climb the steps
// 1 or 2 step at a time
// i/p : 2   o/p: 1step+1step,2step == 2
// i/p:3 o/p:1+1+1,1+2,2+1 == 3
// var climbStairs = function (n) {
//     let first = 1;
//     let second = 1;
//     for (let i = 0; i < n - 1; i++) {
//         let temp = first;
//         first = first + second;
//         second = temp;
//     }
//     return first;
// };

// var climbStairs = function (n) {
//     const noOfways = [1, 2]
//     for (let i = 2; i <= n; i++) {
//         noOfways[i] = noOfways[i - 1] + noOfways[i - 2]
//         console.log('No of ways ', i, 'number:::', i + 1, noOfways[i])
//     }

//     return noOfways[n - 1]
// }

// i/p: n=2
// 1 step or 2 step
// 1 1
// 2 
// // 5 = n-1 + n-2
// 1 1 1
// 1 2
// 2 1

const climbStairs = (n, set = {}) => {
    if (n in set) return set[n];
    if (n < 0) return 0;
    if (n === 0) return 1;

    set[n] = climbStairs(n - 1, set) + climbStairs(n - 2, set);
    return set[n];
}


console.log('climbstairs:::', climbStairs(3))

// // 11/8/22 
// TowerOfHanoi-problem
// forumla or patter for this problem:
// * Take 1 disk (n-1) from A to B
// *Take 1 disk (n-1) from B to C
// *Take last disk from A to C 
// f-A
// t-C
// u-B
function towerOfHanoi(n, fromRod, toRod, usingRod, key) {
    console.log(key)
    // baseCase
    if (n === 1) {
        //last disk
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
        return
    }

    towerOfHanoi((n - 1), fromRod, usingRod, toRod, '1st-call')
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)

    towerOfHanoi((n - 1), usingRod, toRod, fromRod, '2nd-call')
    console.log('HEY console me')
}

// console.log(towerOfHanoi(3, 'A', 'C', 'B', 'main-call'))