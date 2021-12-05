// function anagrams(strA,strB){
//     let charMapA=buildCharMap(strA);
//     let charMapB=buildCharMap(strB);

//     if(Object.keys(charMapA).length !== Object.keys(charMapB).length ){
//         return false
//     };

//     for(let char in charMapA){
//         if(charMapA[char] !== charMapB[char]){
//             return false
//         }
//     }

//     return true
// }

// function buildCharMap(str){
//     let cleanedStr=str.replace(/[^\w]/g,'').toLowerCase();
//     let charMap={};

//     for(let char of cleanedStr){
//         if(charMap[char]){
//             charMap[char]++
//         }else{
//             charMap[char]=1
//         }

//     }

//     return charMap
// }

// console.log(anagrams('test','ttes'))


function anagrams2(strA,strB){
    let cleanStringA = cleanString(strA);
    let cleanStringB = cleanString(strB);

    return cleanStringA === cleanStringB
}

console.log(
    anagrams2('abc','bca'))

function cleanString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join()
}
