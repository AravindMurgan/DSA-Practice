// Given a string, return the characters that is most commonly
//used in the string...
//--Ex
//maxChar('abccccccd') === 'c'
//maxchar(235356*&^%aaaaaaaaaaa) === a

function maxChar(str){
    let charMap={};
    let max = 0;
    let maxChar = '';
    for(let char of str){
        if(!charMap[char]){
            charMap[char] = 1;
        }else{
            charMap[char]++
        }
        
    }
    for(let char in charMap){
        debugger
        if(charMap[char] > max ){
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}

console.log(maxChar('abbbccccccc'))


