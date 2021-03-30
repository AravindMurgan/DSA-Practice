// // //
// // // function steps(num) {

// // const { level } = require('chalk');

// // // function steps(num) {
// // // 	for (let row = 0; row < num; row++) {
// // // 		let stair = '';

// // // 		for (let column = 0; column < num; column++) {
// // // 			if (column <= row) {
// // // 				stair += '#';
// // // 			} else {
// // // 				stair += ' ';
// // // 			}
// // // 		}

// // // 	}

// // // }

// // //  console.log(steps(2)); ;

// // function pyramid(n, row = 0, stair = '') {
// // 	let midpoint = Math.floor((2 * n - 1) / 2);

// // 	//base-case//
// // 	if (row === n) {
// // 		return;
// // 	}

// // 	if (n * 2 - 1 === stair.length) {
// // 		return pyramid(n, row + 1);
// // 	}

// // 	let add;
// // 	if (midpoint - row <= stair.length && midpoint + row >= stair.length) {
// // 		add = '#';
// // 	} else {
// // 		add = ' ';
// // 	}

// // 	pyramid(n, row, stair + add);
// // }
// // pyramid(3);

// // let input = 'g  eeks   for ge  eeks  ';
// // // console.log(Input.replace(/[^\w]/g, ''));
// // // console.log(Input);

// // input = 'prabhat kumar singh';

// // for(let str of input.split(' ')){
// // 	let inital = str[0].toUpperCase();

// // 	console.log(inital);
// // }

// //Fibbonaci -- recursion//

// //Generic-memoize function

// function memoize(fn) {
// 	const cache = {};

// 	return function (...args) {
// 		if (cache[args]) {
// 			return cache[args];
// 		}

// 		const result = fn.apply(this, args);
// 		cache[args] = result;

// 		return result;
// 	};
// }

// function slowFib(n) {
// 	if (n < 2) {
// 		return n;
// 	}

// 	return slowFib(n - 1) + slowFib(n - 2);
// }

// const fib = memoize(slowFib);

// console.log(fib(10));

// let arr = [1, 2, 3];

// console.log(arr.push());
// console.log(arr);

// let s = '  -42';
// s = s.replace(/[\s\W]/g, '');
// let negative = s < 0;
// let result = 0;
// for (let char of s) {
// 	if (char >= '0' && char <= '9') {
// 		// result = char * 10 + (char- '0');
// 		result = result * 10 + (char - '0');
// 		console.log(result);
// 	} else {
// 	}
// }

// const make32Bit = (n) => {

// 	const minBound = -(2 ** 31);
// 	const maxBound = 2 ** 31 - 1;

// 	return ((n) => {
// 		return n < minBound ? minBound : n > maxBound ? maxBound : n;
// 	})(n);
// };

// var myAtoi = function (s) {
// 	debugger;
// 	s = s.trimStart();

// 	s = parseInt(s);
// 	console.log(s);

// 	if (!s) return 0;

// 	return make32Bit(s);
// };

// console.log(myAtoi('words and 987'));

////Consecutive Characters///

// function ConChar(word){
// 	let count =0;
// 	let obj={};

// 	for(let char of word){
// 		if(obj[char]){
// 			obj[char]++;
// 		}else{
// 			count = 1
// 		}
// 	}
// 	return count

// }
// ConChar('leetcode')

// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
// 	let chunked = [];

// 	for (let element of array) {
// 		let last = chunked[chunked.length - 1];
// 		if (!last || last.length === size) {
// 			chunked.push([element]);
// 		} else {
// 			last.push(element);
// 		}
// 	}

// 	return chunked;
// }

// console.log(chunk([1, 2, 3, 4, 5], 2));

// function anagram(str) {
// 	let prev = str[0];
// 	let result = [];
// 	for (let i = 1; i <= str.length; i++) {
// 		if (str[i] === prev) {
// 			result.array([str]);
// 		}
// 	}
// }
// anagram(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

//group Anagrams///

// var groupAnagrams = function (strs) {
// 	debugger;
// 	let length = strs.length;
// 	let hash = {};
// 	let result = [];
// 	for (let i = 0; i < length; i++) {
// 		let str = strs[i];
// 		let sorted = str
// 			.split('')
// 			.sort((a, b) => (a > b ? -1 : 1))
// 			.join('');

// 		if (hash[sorted]) {
// 			hash[sorted].push(str);
// 		} else {
// 			hash[sorted] = [str];
// 		}
// 	}
// 	for (let i in hash) {
// 		result.push(hash[i]);
// 	}
// 	return result;
// };

// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

// let obj = { tea: [1, 2, 3] };

// console.log(obj[tea]);

var detectCapitalUse = function (word) {
	let captial = word.toUpperCase();
	let small = word.toLowerCase();
	let pascal = word[0].toUpperCase() + word.slice(1);

	if (word === captial || word === small || word === pascal) {
		return true;
	}

	return false;
};

console.log(detectCapitalUse('USaedasra'));


var detectCapitalUse = function(word) {
    let capitalCount = 0
    for(let i=0; i<word.length; i++){
        let char = word[i]
        if(char ===char.toUpperCase()){
            capitalCount+=1
        }
    }
    return capitalCount===word.length || 
        capitalCount===0 || 
        word[0]===word[0].toUpperCase()&& capitalCount===1
};

