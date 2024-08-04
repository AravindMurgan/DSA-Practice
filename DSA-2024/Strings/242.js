var hashMap=function(word){
    const obj={}

    for(let char of word){
        if(obj[char]){
            obj[char]++
        }else{
            obj[char]=1
        }
    }

    return obj
}

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    const map1 = hashMap(s);

    for(let char of t){
        if(!map1[char]) return false

        map1[char]--
        //if(map1[char] <0) return false
    }
    return true
};

console.log(isAnagram('anagram','nagaraa'))