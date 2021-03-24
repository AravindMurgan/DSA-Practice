// //
// // function steps(num) {

// const { level } = require('chalk');

// // function steps(num) {
// // 	for (let row = 0; row < num; row++) {
// // 		let stair = '';

// // 		for (let column = 0; column < num; column++) {
// // 			if (column <= row) {
// // 				stair += '#';
// // 			} else {
// // 				stair += ' ';
// // 			}
// // 		}

// // 	}

// // }

// //  console.log(steps(2)); ;

// function pyramid(n, row = 0, stair = '') {
// 	let midpoint = Math.floor((2 * n - 1) / 2);

// 	//base-case//
// 	if (row === n) {
// 		return;
// 	}

// 	if (n * 2 - 1 === stair.length) {
// 		return pyramid(n, row + 1);
// 	}

// 	let add;
// 	if (midpoint - row <= stair.length && midpoint + row >= stair.length) {
// 		add = '#';
// 	} else {
// 		add = ' ';
// 	}

// 	pyramid(n, row, stair + add);
// }
// pyramid(3);

// let input = 'g  eeks   for ge  eeks  ';
// // console.log(Input.replace(/[^\w]/g, ''));
// // console.log(Input);

// input = 'prabhat kumar singh';

// for(let str of input.split(' ')){
// 	let inital = str[0].toUpperCase();

// 	console.log(inital);
// }

//Fibbonaci -- recursion//

//Generic-memoize function

function memoize(fn){

	const cache = {};

	return function(...args){

		if(cache[args]){
			return cache[args]
		}

		const result = fn.apply(this,args);
		cache[args] = result;

		return result
	}
}


function slowFib(n) {
	if (n < 2) {
		return n;
	}

	return slowFib(n - 1) + slowFib(n - 2);
}

const fib = memoize(slowFib);

console.log(fib(10));
