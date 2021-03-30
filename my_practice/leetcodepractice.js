// // ///25.3.2021//

// // //1.string reversal//
// // //eg: reverse('apple')= 'elppa'

// // function reverse(char){
// //     return char.split('').reverse().join('')
// // }

// // console.log(reverse('hi'));

// // var reverseString = function(s) {

// //     let data = [];

// //         let reversed = s.reverse();
// //         data.push(reversed);

// // };

// // console.log(reverseString(["h","e","l","l","o"]));

// // let a = 'hello';
// // for(let char of a){
// //     let res=char.includes('aeiou');
// //     console.log(char);
// // }

// 2; ///Vowel String reversal//
// //eg :  i/p: 'hello' , o/p: 'holle'

// function reverseVowels(s) {
// 	//hash-table-technqiue//
// 	const vowels = {};

// 	for (let char of 'aeiouAEIOU') {
// 		vowels[char] = true;
// 	}

// 	const characters = s.split('');

// 	let left = 0;
// 	let right = s.length - 1;

// 	while (left < right) {
// 		while (left < right && !(s[left] in vowels)) {
// 			left += 1;
// 		}
// 		while (left < right && !(s[right] in vowels)) {
// 			right -= 1;
// 		}

// 		swap(characters, left, right);
// 		left += 1;
// 		right -= 1;
// 	}

// 	return characters.join('');
// }
// ;
// console.log(reverseVowels('leetcode'));

// function swap(arr, i, j) {
// 	const temp = arr[i];
// 	arr[i] = arr[j];

// 	arr[j] = temp;
// }

// function reverseVowels(s){

//     const vowels = {};

//     for(let char of s){
//         vowels[char]=true;
//     }

//     const characters = s.split('');
//     let left = 0;
//     let right = s.length -1;

//     while(left < right){

//         while(left < right && !(s[left] in vowels )){

//               left +=1;
//         }

//         while(left < right && !(s[right] in vowels )){

//               right -=1;
//         }

//         swap(characters,left,right);
//         left +=1;
//         right -=1;

//     }
//     return characters.join('')

// }
// console.log(reverseVowels('hello'));

// function swap(arr,i,j){
//     let temp = arr[i];
//     arr[i]=arr[j];
//     arr[j]= temp;
// }

// var reverseVowels = function(s) {
//     let vowels = "AEIOUaeiou"
//     let arr = s.split('')

//     let i=0;
//     let j=arr.length-1;
//     let temp = '';

//     while(i<j){
//         if(vowels.indexOf(arr[i]) === -1){
//             i++
//         }

//         if(vowels.indexOf(arr[j]) === -1){
//             j--
//         }

//         if(vowels.indexOf(arr[i]) !== -1 && vowels.indexOf(arr[j]) !== -1){
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//             i++
//             j--
//         }
//     }

//     return arr.join('')
// };

// 3; /// Remove Vowel from  String//

// //i/p: 'aeoiu' o/p:''  , i/p: 'aaaaae' o/p:''

// function removeVowels(s){

//     return s.replace(/[aeiou]/g,'')

// }

// console.log(removeVowels('leetcode'));

// 4 /// Valid palidrome - II 680//
// var validPalindrome = function (s) {
// 	debugger;
// 	s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
// 	console.log(s);
// 	let left = 0,
// 		right = s.length - 1;

// 	while (left < right) {
// 		if (s[left] !== s[right]) {
// 			return subpal(s, left + 1, right) || subpal(s, left, right - 1);
// 		}
// 		left++;
// 		right--;
// 	}
// 	return true;
// };

// var subpal = function (s, left, right) {
// 	while (left < right) {
// 		if (s[left] !== s[right]) {
// 			return false;
// 		}
// 		left++;
// 		right--;
// 	}
// 	return true;
// }

// console.log(validPalindrome('abc'));

// 5/// Reverse Integer - II 680//

// function reverse(x) {
// 	if ((x <= 2) ^ (31 - 1) && (x >= -2) ^ 31) {
// 		return 0;
// 	}else{
//         let reversed = x.toString().split('').reverse().join('');
//         return reversed
//     }

// }

// console.log(reverse(123));

//6/// Reverse Integer- 7//
// function reverseInt(x) {

// 	let negative = x < 0;
// 	let reversed = 0;

// 	if (negative) {
// 		x *= -1;
// 	}

// 	while (x > 0) {
// 		reversed = reversed * 10 + (x % 10);
// 		x = Math.floor(x / 10);
// 	}

// 	if (reversed > 2 ** 31 - 1) {
// 		return 0;
// 	}

// 	return negative ? reversed * -1 : reversed;
// }

///7-String to Integer (atoi) 8///

// function myAtoi(n){

//     n = n.trimStart();

//     n= parseInt(n);

//     if(!n){
//         return 0
//     }

//     return make32bit(n)
// }

// function make32bit(n){
//      const minBound = -(2 ** 31);
//     const maxBound = 2 ** 31 - 1;

//     return n < minBound ? minBound : n > maxBound ? maxBound : n
// }

// function atoi(){
//     s = s.replace(/[\s\W]/g, '');
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
// }

///8 - 1446. Consecutive Characters ///
// Input: s = "leetcode"
// Output: 2

// function consecutiveChar(s) {
// 	let prev = s[0];
// 	let count = 0;
// 	let charLength = s.length;

// 	for (let i = 1; i <= charLength; i++) {
// 		console.log(s[i]);
// 		if (s[i] !== prev) {
// 			count = 1;
// 			prev[i];
// 		} else {
// 			count++;
// 		}
// 	}

// 	return count;
// }

// console.log(consecutiveChar('leetcode'));

// var maxPower = function (s) {
// 	debugger
// 	let prev = "";
// 	let count = 0;
// 	let result = 0;
// 	for (let i = 0; i < s.length; i++) {
// 	  if (s[i] !== prev) {
// 		count = 1;
// 		prev = s[i];
// 	  } else {
// 		count++;
// 	  }

// 	  result = Math.max(count, result);
// 	}
// 	return result;
//   };

//   maxPower('leetcodeeee')

///Group Anagarms - 49 ///

// function groupAnagrams(strs) {
// 	let length = strs.length;
// 	let result = [];
// 	let hash = {};

// 	for (let i = 0; i < length; i++) {
// 		let str = strs[i];
// 		let sorted = str
// 			.split('')
// 			.sort((a, b) => (a > b ? 1 : -1))
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
// }

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));



// ///520. Detect Capital////

// //better-space complexity//
// var detectCapitalUse = function (word) {
// 	let captial = word.toUpperCase();
// 	let small = word.toLowerCase();
// 	let pascal = word[0].toUpperCase() + word.slice(1);

// 	if (word === captial || word === small || word === pascal) {
// 		return true;
// 	}

// 	return false;
// };

// console.log(detectCapitalUse('USaedasra'));

// ///better time complexity//
// var detectCapitalUse = function (word) {
// 	debugger
//     let allCap = /[^A-Z]/
//     let allLow = /[^a-z]/
//     let firstCap = /^[A-Z]/
    
    
//     function check(string) {
//         if(!allCap.test(string)) {
//             return true
//         } else if(!allLow.test(string)) {
//             return true
//         } else if ( firstCap.test(string) && !allLow.test(string.slice(1)) ) {
//             return true
//         } else return false
//     }
    
//     return check(word) 
}






