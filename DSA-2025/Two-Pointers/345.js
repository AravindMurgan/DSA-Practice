var reverseVowels = function(s) {
    const set = new Set(['a','e','i','o','u','A','E','I','O','U'])

    let i=0
    let j= s.length-1
    let str=s.split('')

    while(i<j){
        if(set.has(str[i]) && set.has(str[j])){
            [str[i],str[j]]=[str[j],str[i]]
            i+=1
            j-=1
        }

        if(!set.has(str[i])){
            i+=1
        }

        if(!set.has(str[j])){
            j-=1
        }
    }

    return str.join('')
};
let s= "IceCreAm"
reverseVowels(s)
