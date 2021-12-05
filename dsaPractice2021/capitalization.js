// function capitalization(str){
// let words=[];

//   for(let word of str.split(' ')
//   ){    
//         words.push(word[0].toUpperCase() + word.slice(1))
//   }

//   return words.join(' ')
// }


// console.log(capitalization('my name is aravind'))



function capitalization2(str){
    let result=str[0].toUpperCase();
    const length = str.length
    for(let i=1; i< length; i++){
        if(str[i-1] == ' '){
            result +=str[i].toUpperCase();
        }else{
            result += str[i]
        }
    }


    return result
}
console.log(capitalization2('a short sentence'))
