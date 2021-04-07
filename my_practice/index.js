// // --- Directions
// // // Given an integer, return an integer that is the reverse
// // // ordering of numbers.
// // // --- Examples
// //   reverseInt(15) === 51
// //   reverseInt(981) === 189
// //   reverseInt(500) === 5
// //   reverseInt(-15) === -51
// //   reverseInt(-90) === -9

// const { setupMaster } = require('node:cluster');

// function reverseInt(numbers) {

// 	return numbers.split('').reverse().join('');

// }

// reverseInt(15);

// module.exports = reverseInt;

// function reverseInt(word) {

// 	return numbers.split('').reverse().join('');

// }

// reverseInt('apple');

// module.exports = reverseInt;

// function reverseChar(word){

// 	word.forEach((letter)=>console.log(letter));

//     let reversed = '';
//     for(let letter of word){

//         reversed = letter + reversed;
// 	}
// 	debugger;
//     return reversed;
// }

// let output = reverseChar('123456');
// console.log(output);

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(numbers) {

// 	return numbers.split('').reverse().join('');

// }

// reverseInt(15);

// module.exports = reverseInt;

// function reverseInt(word) {

// 	return numbers.split('').reverse().join('');

// }

// reverseInt('apple');

// module.exports = reverseInt;

//Reverse String - 1

// function reverseInt(word) {

// 	return word.split('').reverse().join('');

// }

// let output = reverseInt('12345');
// console.log(output);

//Reverse String - 2

// function reverseChar(word){

//     // word.forEach((letter)=>console.log(letter));
//     let reversed = '';
//     for(let letter of word){

//         reversed = letter + reversed;
//     }
//     return reversed;
// }

// let output = reverseChar('123456');
// console.log(output);

/////String Reversal////

// function reverseChar(word){

// 	// word.forEach((letter)=>console.log(letter));

//     let reversed = '';
//     for(let letter of word){

//         reversed = letter + reversed;
// 	}

//     return reversed;
// }

// let output = reverseChar('123456');
// debugger;
// console.log(output);

// function palindrome(str) {

//     const reverse = str.split('').reverse().join('');

//     if(reverse === str){
//         return true +  'Its a Palindrome' ;
//     }else{
//         return false +  'Its not  a Palindrome' ;
//     }

// }

// const output = palindrome('abba');
// console.log(output);

// module.exports = palindrome;

// /////Palindrome ALternate solution///////
// const output = palindrome('abba');

// // function palindrome(str){
// //     str.split('').every((char,idx)=>{ console.log(char === str[str.length -idx -1]) },console.log(str.length))
// }

////ReverseInt////

// console.log( reverseInt(-500));
// function reverseInt(num){

//     const output = parseInt( num.toString().split('').reverse().join(''));

//     if(num < 0){
//         return output * -1
//     }
//     return output;
// }

////ReverseInt//// -2

// console.log( reverseInt(-500));
// function reverseInt(num){

//     const reversed = num.toString().split('').reverse().join('');
//     parseInt(reversed);

//    return parseInt(reversed) * Math.sign(num)
// }

// const word = "Hello There";

// const chars = {};

// // word.forEach((char)=>console.log(char))//

// for(let char of word){

//     if(!chars[char]){

//         console.log(chars[char]);
//         chars[char] = 1;
//     }else{
//         chars[char] ++;
//     }
//     console.log(chars);
// }
// console.log(chars);

// /////////////////////MaxChar

// maxChar('aooooooaa')

// function maxChar(word){
//     let max = 0;
//     let maxChar = '';

//     const  obj = {};
//     for(let char of word){
//          if(obj[char]){
//             obj[char] ++;
//         }else{
//             obj[char] = 1;

//         }
//     }

//     for(let char in obj){
//         console.log(char);
//         if(obj[char]>max){
//             max=obj[char];
//             console.log(  max=obj[char]);
//             maxChar = char;
//             console.log( maxChar = char);

//         }
//     }
//     console.log(maxChar);

// }

// function reverseInt(num){

//     const reversed = num.toString().split('').reverse().join('');
//     const output = parseInt(reversed);
//     console.log(output)

// }

// reverseInt(59656);

// //Spread Operator///

// const stuff = [24,'Aravind','Murugan','Likes Beers'];

// myFunc(stuff);
// function myFunc(stuff1,stuff2,stuff3,stuff4){
//     console.log(stuff1+stuff2+stuff3+stuff4)
// }

// //timeout///

// console.log('a');

// let jhonDoe = setTimeout(()=>{
//     console.log('b')
// },1);

// let jimmy = setTimeout(()=>{
//     console.log('c')
// },10)

// let tom = setTimeout(()=>{
//     console.log('d')
// },0);
// let jason = setTimeout(()=>{
//     console.log('e')
// })

///async await ///
// let num = 0;
// const myFunc =  async ()=>{
//      num += await 2;
//      console.log(num)
// }

// myFunc();
// num += 1;
// console.log(num);

//

///Module Pattern/// IIFEE

// let myModule = {
//     data: [],
//     render: () => {

//     },
//     add: () => {

//     },
//     remove: () => {

//     }
// };

// let myModule = (() => {
// 	let myData = {
// 		data: ['hello'],
// 		render: () => {},
// 		add: () => {
// 			console.log('helo');
// 		},
// 		remove: () => {},
// 	};

// 	return {
// 		data: myData.add,
// 	};
// })();

// myModule.data();

// ///Params///
// let f = function(a,b){

//     if(arguments.length === f.length){
//         console.log('Match')
//     }else{
//         console.log('No match')
//     }

// }

// f(1)
// f(1,2)
// f(1,2,3)

////DSA Prep starting for next offer - 17.03.2021

///CHUNK PROBLEM////
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
	let chunked = [];
	console.log(chunked);
	for (let element of array) {
		let last = chunked[chunked.length - 1];

		if (!last || last.length === size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}

		return chunked;
	}
}

///Better solution///
let output = chunk([1, 2, 3, 4], 2);
console.log(output);

function chunk(array, size) {
	let arr = [];
	while (array.length > 0) {
		arr.push(array.slice(0, size));
	}

	return arr;
}

///Anagrams  = a=hello b=olleh => no .of letter should be same and avoid extra space and non word
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// let outpu = anagrams('RAIL! SAFETYm!', 'fairy talese');
// function anagrams(stringA, stringB) {
// 	let Astring = buildCharMap(stringA);
// 	let BString = buildCharMap(stringB);

// 	if (Object.keys(Astring).length === Object.keys(BString).length) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function buildCharMap(str) {
// 	let charMap = {};

// 	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}
// 	return charMap;
// }

// let output = buildCharMap('hello');

///sec solution//
// const Anagrams = (stringA, stringB) => {
// 	const dirA = {};

// 	const dirB = {};
// 	stringA = stringA.replace(/[^\w]/g, '').toLocaleLowerCase().split('');
// 	stringB = stringB.replace(/[^\w]/g, '').toLocaleLowerCase().split('');

// 	stringA.forEach((char) => (dirA[char] = dirA[char] + 1 || 1));
// 	stringB.forEach((char) => (dirB[char] = dirB[char] + 1 || 1));

// 	const keys = Object.keys(dirA);
// 	return stringA.length !== stringB.length
// 		? false
// 		: keys.every((key) => dirA[key] === dirB[key]);
// };

/////LeetCode-Top interview questions practice --- give ur best maa is with u!!!

//1.Two Sum///

// let twoSum = function (nums, target) {
// 	const bucket = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		if (target - nums[i] in bucket) {
// 			return [bucket[target - nums[i]], i];
// 		}
// 		bucket[nums[i]] = i;

// 	}
// };

// output = twoSum([2, 7, 11, 15], 9);
// console.log(output);

// /better solution//
// let twoSum = function (num, target) {
// 	let comp = new Map();
// 	let len = num.length;

// 	for (let i = 0; i < len; i++) {
// 		if (comp[num[i]] >= 0) {
// 			return [comp[num[i]], i];
// 		}

// 		comp[target - num[i]] = i;
// 	}

// 	return [];
// };

////2nd betterone

// var twoSum = function(nums, target) {
//     let memo = {}

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] in memo) {
//             return [memo[nums[i]], i]
//         } else {
//             memo[target - nums[i]] = i
// 			console.log(memo);
//         }

//     }

// };

// output = twoSum([2, 7, 11, 15], 9);
// console.log(output);

////Coming back to Udmey Course///

1; //Anagrams//

///Anagrams  = a=hello b=olleh => no .of letter should be same and avoid extra space and non word
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// output = anagrams('rail safety', 'fairy tales');
// console.log(output);

// function anagrams(stringA, stringB) {
// 	return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
// 	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }

//2.captilization

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

output = capitalize('look, it is working!');
function capitalize(str) {
	let words = [];

	for (let word of str.split(' ')) {
		words.push(word[0].toUpperCase() + word.slice(1));
	}
	return words.join(' ');
}

//3.Printing Steps//

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
// 	//row//
// 	for (let row = 0; row < n; row++) {
// 		let stair = '';
// 		for (let column = 0; column < n; column++) {
// 			if (column <= row) {
// 				stair += '#';
// 			} else {
// 				stair += ' ';
// 			}

// 		}

// 	}
// }
// output = steps(5);
// console.log(output);

// function steps(n) {
//     for (let count = 1; count <= n; count++) {
//     console.log( '#'.repeat(count) + ' '.repeat(n - count));
//     }

// }

///Recusrive solution//
// function printNum(num){

// 	//base-case//
// 	if(num === 0){
// 		return;
// 	}
// 	console.log(num);
// 	printNum(num -1)

// }
// printNum(10)

// //Print-Steps in recursive///
// function steps(n, row = 0, stair = '') {
// 	//base//
// 	if (n === row) {
// 		return;
// 	}

// 	if (n === stair.length) {
// 		return steps(n, row + 1);
// 	}

// 	if(stair.length <= row ){
// 		stair += '#';
// 	}else{
// 		stair += ' ';
// 	}

// 	steps(n,row,stair)

// }
// steps(2);

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
// //    '#####'

// function pyramid(n) {

// 	let midpoint = Math.floor((2*n - 1)/2)
// 	//row/
// 	for(let row=0; row<n; row ++){
// 		let steps = '';
// 		for(let column=0; column < n*2 -1; column ++){

// 			if(midpoint - row <= column && midpoint + row >= column){
// 				steps += '#';
// 			}else{
// 				steps += ' ';
// 			}
// 		}

// 	}

// }

// pyramid(3)

///find vowles//
// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
// 	// console.log(str.replace(/[^\w]/g, '').toLowerCase().includes('aeiou'));
// 	let count = 0;
// 	let checker = ['a', 'e', 'i', 'o', 'u'];

// 	for (let char of str.toLowerCase()) {
// 		if (checker.includes(char)) {
// 			 count++;
// 		}
// 	}
// 	return count;

// }

// console.log(vowels('Why do you ask?'));

///Spiral Matrix - alternate solution//

// function matrix(n) {
// 	//array//
// 	let results = [];

// 	//no of n arrays//
// 	for (let i = 0; i < n; i++) {
// 		results.push([]);
// 	}

// 	//variables
// 	let counter = 1;
// 	let startRow = 0;
// 	let endRow = n - 1;
// 	let startColumn = 0;
// 	let endColumn = n - 1;

// 	while (startRow <= endRow && startColumn <= endColumn) {
// 		//toprow--1st piece//
// 		for (let i = startColumn; i <= endColumn; i++) {
// 			results[startRow][i] = counter;
// 			counter++;
// 		}
// 		startRow++;

// 		//secondrow - 2nd piece//
// 		for (let i = startRow; i <= endRow; i++) {
// 			results[i][endColumn] = counter;
// 			counter++;
// 		}

// 		endColumn--;

// 		//bottomrow  -3rd piece//
// 		for (let i = endColumn; i >= startColumn; i--) {
// 			results[endRow][i] = counter;
// 			counter++;
// 		}

// 		endRow--;

// 		//1strow element - 4th piece//
// 		for (let i = endRow; i >= startRow; i--) {
// 			results[i][startColumn] = counter;
// 			counter++;
// 		}
// 		startColumn++;
// 	}

// 	return results;
// }

// matrix(3);

////Spiral MAtrix - II

// var spiralOrder = function (matrix) {
// 	let top = 0,
// 		right = matrix[0].length - 1,
// 		bottom = matrix.length - 1,
// 		left = 0;
// 	const size = matrix.length * matrix[0].length;
// 	const res = [];
// 	// [1,2,3,6,9,8,7,4,5]
// 	while (res.length < size) {
// 		for (let i = left; i <= right; i++) {
// 			res.push(matrix[top][i]);
// 		}

// 		for (let i = top + 1; i <= bottom; i++) {
// 			res.push(matrix[i][right]);
// 		}

// 		for (let i = right - 1; i >= left; i--) {
// 			res.push(matrix[bottom][i]);
// 		}

// 		for (let i = bottom - 1; i > top; i--) {
// 			res.push(matrix[i][left]);
// 		}

// 		top++;
// 		right--;
// 		left++;
// 		bottom--;
// 	}
// 	return res.slice(0, size);
// };

// spiralOrder([
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]);
// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));

///Spiral-Matrix = II

// function spiralMatrix(matrix) {
// 	//var//
// 	let startRow = 0;
// 	let endRow = matrix[0].length - 1;
// 	let startColumn = 0;
// 	let endColumn = matrix[0].length - 1;

// 	const results = [];

// 	//overall looping//
// 	// [1,2,3,6,9,8,7,4,5]
// 	while (startRow <= endRow && startColumn <= endColumn) {
// 		// 1st piece- row/
// 		for (let i = startRow; i <= endRow; i++) {
// 			results.push(matrix[startColumn][i]);
// 		}
// 		//2nd piece// single element
// 		for (let i = startRow + 1; i <= endRow; i++) {
// 			results.push(matrix[i][endRow]);
// 		}

// 		//3rd--piece //botton row//
// 		for (let i = endRow - 1; endRow >= startRow; i--) {
// 			results.push(matrix[endColumn][i]);
// 		}

// 		// //4th-piece --middle row//
// 		// for(let i = bottom - 1; i > top ; i--  ){
// 		// 	results.push(matrix[])
// 		// }
// 	}

// 	return results;
// }

// spiralMatrix([
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]);

///Fibonacci//

// function fib(n) {
// 	const results = [0, 1];

// 	for (let i = 2; i <= n; i++) {
// 		const a = results[i - 1];
// 		const b = results[i - 2];
// 	}

// 	return results[n];
// }
// fib(4);

///Queue - DS problems/

// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
	constructor() {
		this.data = [];
	}

	add(record) {
		this.data.unshift(record);
	}

	remove() {
		return this.data.pop();
	}

	peek() {
		return this.data[this.data.length - 1];
	}

	myFunc() {
		console.log('hello');
	}
}

// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

// let Queue = require('./queue');

// function weave(sourceOne, sourceTwo) {
// 	const q = new Queue();

// 	while (sourceOne.peek() || sourceTwo.peek()) {
// 		if (sourceOne.peek()) {
// 			q.add(sourceOne.remove());
// 		}

// 		if (sourceTwo.peek()) {
// 			q.add(sourceTwo.remove());
// 		}
// 	}

// 	return q;
// }

// let wve = weave([1, 2, 3], [4, 5, 6]);
// console.log(wve);

// ///LeetCode Queue problem///
// function RecentCounter () {
//     this.requests = [];
// };

// RecentCounter.prototype.ping = function(t) {
//     this.requests.push(t);
//     this.requests = this.requests.filter(x => x >= t - 3000);
//     return this.requests.length;
// };

//  console.log(ping.call(10));

/////LinkedList -- Midpoint ////
// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// function midpoint(list) {
// 	let slow = list.getFirst();
// 	let fast = list.getFirst();

// 	while (fast.next && fast.next.next) {
// 		slow = slow.next;
// 		fast = fast.next.next;
// 	}

// 	return slow;
// }

// module.exports = midpoint;

// var middleNode = function(head) {
//     let slow = head, fast = head
//     while(fast !== null && fast.next !== null){
//         slow = slow.next
//         fast = fast.next.next
//     }
//     return slow
// };

function myLoop() {
	debugger;
	let n = 5;
	while (n > 0) {
		return n;
	}
}
myLoop();
