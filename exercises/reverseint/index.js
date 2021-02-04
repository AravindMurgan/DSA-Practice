// // --- Directions
// // Given an integer, return an integer that is the reverse
// // ordering of numbers.
// // --- Examples
// //   reverseInt(15) === 51
// //   reverseInt(981) === 189
// //   reverseInt(500) === 5
// //   reverseInt(-15) === -51
// //   reverseInt(-90) === -9

// // function reverseInt(numbers) {

// // 	return numbers.split('').reverse().join('');

// // }

// // reverseInt(15);

	
// // module.exports = reverseInt;


// // function reverseInt(word) {

// // 	return numbers.split('').reverse().join('');

// // }

// // reverseInt('apple');

	
// // module.exports = reverseInt;

// function reverseChar(word){

// 	// word.forEach((letter)=>console.log(letter));
	
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

console.log( reverseInt(-500));
function reverseInt(num){

    const reversed = num.toString().split('').reverse().join('');
    parseInt(reversed);
   
   return parseInt(reversed) * Math.sign(num)
}


