// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	// console.log(str.replace(/[^\w]/g, '').toLowerCase().includes('aeiou'));
	let count = 0;
	let checker = ['a', 'e', 'i', 'o', 'u'];

	for (let char of str.toLowerCase()) {
		if (checker.includes(char)) {
			count++;
		}
	}
	return count;
}

console.log(vowels('Why do you ask?'));

module.exports = vowels;
