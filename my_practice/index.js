// // --- Directions
// // // Given an integer, return an integer that is the reverse
// // // ordering of numbers.
// // // --- Examples
// //   reverseInt(15) === 51
// //   reverseInt(981) === 189
// //   reverseInt(500) === 5
// //   reverseInt(-15) === -51
// //   reverseInt(-90) === -9

const { setupMaster } = require("node:cluster");

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

// function chunk(array, size) {
// 	let chunked = [];
// 	console.log(chunked);
// 	for (let element of array) {
// 		let last = chunked[chunked.length - 1];

// 		if (!last || last.length === size) {
// 			chunked.push([element]);
// 		} else {
// 			last.push(element);
// 		}

// 		return chunked;
// 	}
// }

// ///Better solution///
// let output = chunk([1, 2, 3, 4], 2);
// console.log(output);

// function chunk(array, size) {
// 	let arr = [];
// 	while (array.length > 0) {
// 		arr.push(array.slice(0, size));
// 	}

// 	return arr;
// }

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

//Print-Steps in recursive///
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


