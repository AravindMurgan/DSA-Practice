// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	let Astring = buildCharMap(stringA);
	let BString = buildCharMap(stringB);

	if (Object.keys(Astring).length === Object.keys(BString).length) {
		return true;
	} else {
		return false;
	}
}

function buildCharMap(str) {
	let charMap = {};

	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	return charMap;
}

anagrams('Hi there', 'Bye there');

module.exports = anagrams;
