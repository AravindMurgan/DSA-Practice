/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    let i=0
    let j=0;

    while(i<chars.length){
        let count=0
        let curr = chars[i]
        
        while(i<chars.length && chars[i] === curr){
            i++
            count++
        }
        chars[j++]=curr
        if(count > 1){
            for(let num of count.toString()){
                chars[j++]=num
            }
        }
    }
    console.log(chars)
    console.log(i)
    return j
};

chars = ["a","a","b","b","c","c","c"]
compress(chars);