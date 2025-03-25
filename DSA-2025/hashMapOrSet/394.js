var decodeString = function(s) {
    const stack=[]
    let result=''

    for(let i=0; i<s.length ;++i){
        if(s[i] === '[' || s[i] === ']') continue
        stack.push(s[i])
    }


    let str=''
    while(stack.length){
        let char=stack.pop()
        if(Number(char)){
            result=str.repeat(parseInt(char)) + result
            str=''
        }else{
            str=char+str
        }
    }

    return result
}; 

console.log(decodeString("3[a2[c]]"))