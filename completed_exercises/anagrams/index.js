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
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}


function buildCharMap(str) {
  let map = new Map()

  for (let char of str) {
    map.set(str[char], (map.get(str[char] || 0) + 1))
  }
  return map
}

var findAnagrams = function (s, p) {
  const arr = []
  let n = s.length
  let k = p.length

  const pCount = buildCharMap(p)

  for (let i = 0; i < n - k + 1; ++i) {
    let isValidAnagram = true
    let str = s.substring(i, (i + k))
    const sCount = buildCharMap(str)

    for (let char in pCount.keys()) {
      if (map.get(char) !== map.get(char)) {
        isValidAnagram = false
      }
    }
    if (isValidAnagram) {
      arr.push(i)
    }
  }
  return arr
};

findAnagrams("cbaebabacd", "abc")