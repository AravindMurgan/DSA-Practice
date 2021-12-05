function vowels(str){
    let isVowel = ['a','e','i','o','u'];
    let count=0;
    for(let char of str.toLowerCase()){
         if(isVowel.includes(char)){
            count++
         }
    }
    return count
}


console.log(vowels(''))