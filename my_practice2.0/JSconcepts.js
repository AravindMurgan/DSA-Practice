// /* 3/5/2021  -- Scope and Closures */
// /*
// function outer(){
//   let counter=0;
//   function inner(){
//     counter++
//     console.log(counter)
//   }
//   inner()
// };

// outer()

// */
// /*
// function outer(){
//   let counter=0;
  
//   function inner(){
//     counter ++
//     console.log(counter)
//   }
//   return inner
// }

// let fn = outer()
// fn()
// fn()
// fn()

// let fn2= outer()
// fn2()
// fn2()

// */

// function square(num){
  
//   return num*num
// }


// function Memoization(){
    
//   let cache = {}
  	
//   return function optimizeSquare(num){
//     debugger
//     if(num in cache){
      
//       return cache[num]
//     }else{
//       const result = square(num);
//       cache[num]= result
      
//       return result
//     }
    
//   }
  
// }

// const memoizeSquare = Memoization();

/* 4/5/2021 this-keyword */
/* Implicit binding */
/*
const person = {
	name:'Jhon',
  sayMyName ( ) {
    console.log(`${name}`)
  }
}

console.log(person.sayMyName())
*/

/* Explicit Binding */
/*
const person2 = {
  name:'Jhon Doe',
}
 function sayMyName(hobby1,hobby2  ){
    console.log(`My Name is ${this.name} and my hobby is ${hobby1} and ${hobby2} `)
  }


sayMyName.apply(person2,['Cricket','Football'])

*/

/*New Binding */

function Person(name){
  /* this = {} */
  this.name=name;
}

const p1 = new Person('Jhon Doe');
const p2 = new Person('Aravind');
const p3 = new Person('Vijay');
console.log(p2.name)



















































































