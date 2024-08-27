// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"] },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
//     { name: "Alice", books: ["The Lord of the Rings", "The Shining"] },
//   ];
//   const allBooks = friends.reduce((acc, cur) => {
//     console.log('Acc',acc);
//     const returnArray = [...acc, ...cur.books];
//     console.log(returnArray)
//     return returnArray;
//   }, []);

//   console.log(allBooks);


Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noInitialValue = initialValue === undefined
  const array=[...this]
  const length = this.length

  let acc= noInitialValue ? array[0]:initialValue
  const startingIndex = noInitialValue ? 0:1

  for(let idx = startingIndex ; idx<length ; idx++){
    if(Object.hasOwn(this,idx)){
      acc= callbackFn(acc,array[idx],idx,array)
    }
  }

  return acc
};


console.log([-6,10].myReduce((acc,cur)=>acc+cur,0) )