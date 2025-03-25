
// var maxVowels = function(s, k) {
//     let maxVal=0
//     let str = s.substring(0,k)
//     const vowelSet= new Set(['a','e','i','o','u'])
//     let vowelCount=0
//     for(let char of str){
//         if(vowelSet.has(char)) vowelCount+=1
//     }
//     maxVal = Math.max(maxVal,vowelCount)

//     for(let i=k; i<s.length ; ++i){
//         if(vowelSet.has(s[i-k]) == false){
//             vowelCount-=1
//         }
//         str[(i-k)]=''
//         str+=s[i]
//         console.log(str)
//         if(vowelSet.has(s[i])){
//             vowelCount+=1
//         }

//         maxVal=Math.max(maxVal,vowelCount)
//     }

//     return maxVal
// };

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let set = new Set(['a','e','i','o','u'])
    let maxVowels=0
    for(let i=0; i<k; ++i){
       if( set.has(s[i])){
            maxVowels+=1
        }
    }

    for(let i=k; i<s.length ; ++i){
        let maxVowelTemp=maxVowels
        console.log(maxVowels)
        if(set.has(s[i-k])) maxVowels-=1

        if(set.has(s[i])) maxVowels+=1
   console.log(maxVowels)
        maxVowels = Math.max(maxVowels,maxVowelTemp)
    }

    return maxVowels
    
};

s = "leetcode", k = 3
maxVowels(s,k)

