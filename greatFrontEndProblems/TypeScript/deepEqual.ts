 
  function getType(val:any){
    return Object.prototype.toString.call(val);
  }
  function shouldDeepCompare(value: string){
    return value === '[object Object]' || value === '[object Array]'
  }

export default function deepEqual(valueA: unknown, valueB: unknown): boolean {
  const type1= getType(valueA);
  const type2= getType(valueB);

  //if its array/object
  if(type1 === type2 && shouldDeepCompare(type1) && shouldDeepCompare(type2)){
    const entries1= Object.entries(valueA as Array<unknown> | Object)
    const entries2 = Object.entries(valueB as Array<unknown> | Object);

    if(entries1.length !== entries2.length) return false

    entries1.every(([key,value])=>{

      return Object.hasOwn(valueB as Array<unknown> | Object,key) &&
       deepEqual(value,(valueB as any )[key])
    })



  }

  return Object.is(valueA,valueB)
}

deepEqual(['1'],['1'])