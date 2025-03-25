var compress1 = function(chars) {

    let i=0
    let j=0;

    while(i<chars.length){
        let count=0
        let curr = chars[i]
        
        while(i<chars.length && chars[i] === curr){
            i++
            count++
        }
        j+=1
        if(count > 1){
            for(let num of count.toString()){
                chars[j++]=num
            }
        }
    }
    
    return i
};

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0;
    let j = 0;
    while (j < chars.length) {
        let count = 0;
        let curr = chars[j];
        while (j < chars.length && chars[j] === curr) {
            j++;
            count++;
        }
        chars[i++] = curr;
        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i++] = digit;
            }
        }
    }
    return i;
};

chars = ["a","a","b","b","c","c","c"]
console.log(compress1(chars))
console.log(compress1(chars))