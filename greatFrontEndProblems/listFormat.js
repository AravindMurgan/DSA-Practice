// function listFormat(items, options) {
//     if(items.length<=0) return ''
//     if(items.length === 1) return items[0]
//     let str=''
//    const itemsList = [...new Set(items)];

//     for(let i=0; i<itemsList.length; ++i){
//         if(i+1 === itemsList.length-1){
//           str+=itemsList[i]+' and '+itemsList[i+1]
//           break;
//         }
//         str+=itemsList[i]+', '
//     }

//     return str
// }

function listFormat(items, options) {
    if(items.length<=0) return ''
    if(items.length === 1) return items[0]
    if(items.length === 2) return items[0]+' and '+items[1]
    
    let str=''
   let itemsList = [...new Set(items)];
if(options.sorted){
 console.log('sort',itemsList)
 itemsList = itemsList.sort((a, b) => a.localeCompare(b));
}
   console.log(itemsList)

    for(let i=0; i<itemsList.length; ++i){
        console.log(i,str);
        if(options?.length >0 && i === options.length){
          str+=' and '+`${(itemsList.length-i)} others`
          break;
        }
        if(i == itemsList.length-1){
          console.log('im entering')
           console.log(i,str);
          str+=' and '+itemsList[i]
          break;
        }
        str+=itemsList[i]+', '
    }

    return str
}
console.log(
    listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
        length: 3,
        sorted: true,
      }) )// 'Ben, Bob, Jane and 2 others'

