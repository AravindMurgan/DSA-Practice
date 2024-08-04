// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var isValidAnagram=function(map,word){

//     for(let char of word){
//         if(!map[char]) return false

//         map[char]--
//     }

//     return true
// } 

// var hashMap=function(str){
//     const obj={}

//     for(let char of str){
//         if(obj[char]){
//             obj[char]++
//         }else{
//             obj[char]=1
//         }
//     }

//     return obj
// }
// var groupAnagrams = function(strs) {
//     const finalResult=[]

//     for(let i=0; i<strs.length ; ++i){
//         const res=[strs[i]]
//         const map =hashMap(strs[i])
        
//         for(let j=1; j<strs.length ;++i){
            
//         if(isValidAnagram(map,strs[j])){
//             res.push(strs[j])
//         }
//         }
//         finalResult.push(res)
//     }

//     return finalResult
// };


var groupAnagrams = function(strs) {
    const res={}

    for(let word of strs){
        let key = new Array(26).fill(0);
        for(let char of word){
            const idx = char.charCodeAt()-97;
            key[idx]++
        }
        key =key.join('^');

        res[key] ? res[key].push(word) : res[key]=[word];
    }

    console.log(res)
    return Object.values(res);
};

strs =["bdddddddddd","bbbbbbbbbbc"]
console.log(groupAnagrams(strs))