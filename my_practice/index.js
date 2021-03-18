// // --- Directions
// // // Given an integer, return an integer that is the reverse
// // // ordering of numbers.
// // // --- Examples
// //   reverseInt(15) === 51
// //   reverseInt(981) === 189
// //   reverseInt(500) === 5
// //   reverseInt(-15) === -51
// //   reverseInt(-90) === -9

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

anagrams('rail safety', 'fairy tales');
function anagrams(stringA, stringB) {
	let Astring = buildCharMap(stringA);
	let BString = buildCharMap(stringB);
}

function buildCharMap(str) {
	let charMap = {};

	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	return charMap;
}

let output = buildCharMap('hello');
console.log(output);
