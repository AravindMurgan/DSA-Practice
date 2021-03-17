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

//Practicing Array Chunk Problems