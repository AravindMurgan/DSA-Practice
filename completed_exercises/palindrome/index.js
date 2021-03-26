// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	});
}

console.log(palindrome('abba'));

module.exports = palindrome;

// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//
//   return str === reversed;
// }

var isPalindrome = function (s) {
	let nonreversed = s.toLowerCase().replace(/[^a-z\d]/g, '');
	console.log(nonreversed);
	let reversed = s.toLowerCase()
		.replace(/[^a-z\d]/g, '').
		split('')
		.reverse()
		.join('');

    console.log(reversed);
	return nonreversed === reversed;
};

console.log(isPalindrome('A man, a plan, _a canal: Panama'));


var validPalindrome = function(s) {
    
  let reversed = s.split('').reverse().join('')
  
  return reversed === s
  
};

console.log(validPalindrome('abca'));