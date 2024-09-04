// function flatten(value) {

//     const result=[]

//     function flat(val){

//       if(Array.isArray(val)){
//         let i=0; 
//         const length =val.length
//         while(i<length){
//           flat(val[i])
//           i++
//         }
//       }else{
//         result.push(val)
//       }

//     }

//     for(let i=0; i<value.length ; ++i){
//       flat(value[i])
//     }

//     return result
// }

// function flatten(value){
//     console.log('VAL:::',value)
//     return value.reduce((acc,curr)=> acc.concat(Array.isArray(curr) ? flatten(curr):curr),[])
// }


// console.log(flatten([1, [2,3,4],[1]]))