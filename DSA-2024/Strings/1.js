// Write a function to chop string into chunks of given length and return it as array.

// Input:
// 'javascript'
// 3

// Output:
// ['jav','asc','rip','t']

// const chopString = (word, k) => {
//   let str = "";
//   const result = [];

//   for (let char of word) {
//     if (str.length === k){
//         result.push(str);
//         str=''
//     }

//     str += char;
//   }

//   return result;
// };

const chopString=(word, k)=>{
    let i=0
    const result=[]

    while(i< word.length){

        result.push(word.slice(i,i+k));
        i=i+k
    }

    return result
}

console.log(chopString('javascript',3))