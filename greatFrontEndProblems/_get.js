//  function get(objectParam, pathParam, defaultValue) {
//     const path = Array.isArray(pathParam) ? pathParam: pathParam.split('.')

//     let object=objectParam
//     const len = path.length
//     let index=0

//     while(index < len && object != null){
//         object=object[String(path[index])]
//         index++
//     }
    
//     console.log(value)
//     const value = index && index === length ? object:undefined;

//     return value != undefined ? defaultValue:value

// }

// get({a:1},'a')

function get(objectParam, pathParam, defaultValue) {
    const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.')
  
    let idx=0
    let object = objectParam
    const length = path.length
  
    while(object != null && idx < length){
      object=object[path[idx]]
      idx++
    }
  
      const value = idx === length ? object:undefined;
      return value === undefined ? defaultValue:value;
}

// get({ a: { b: true } }, 'a.b.c')
get({ a: { b: undefined } }, 'a.b.c')