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
 /* this = {} */
/*
function Person(name){
 
  this.name=name;
}


const p1 = new Person('Jhon Doe');
const p2 = new Person('Aravind');
const p3 = new Person('Vijay');
console.log(p2.name)
*/
/*
const person = {
  firstName:'Jhon',
  lastName:'Doe',
  
  sayMyName(){
  const fullName = ()=>{
    return ` ${this.firstName} ${this.lastName} `
  }
	console.log(`FullName is ${fullName()} `)
  }
}

person.sayMyName()
 */

/*Arrow Function */
/*
const person = {
  name:'Jhon Doe',
  hobbies:['Cricket','Football'],
  printBio(){
    const printHobbies = ( ) => {
      return ` ${this.hobbies[0]} and ${this.hobbies[1]}  `
    }
    console.log(`My Name is ${this.name} `)
    console.log(`I like ${printHobbies()}  `)
  }
}
person.printBio()
*/

/*Prototype */
/*
function Person(name){
  this.name = name
}

Person.prototype.getMyName = function() {
  console.log(`My Name is  ${this.name} `)
}

Person.prototype.food = function(food){
  console.log(`Im eating ${food} `)
}

Person.prototype.sleep = function(){
  console.log(`Im Sleeping`)
}

const jhondoe = new Person('Jhon Doe');

console.log(Person.prototype )

jhondoe.getMyName()
     
 */

/*5/5/2021  JS-Concepts  **************************************/

/* ES6 - Class Methods   */

/*
class Calculator{
  constructor(){
    this.value=0;
   
  }
  
  add(num){
    this.value += num
     return this
  }
  
  sub(num){
    this.value -= num
    return this
  }
  
  print(){
    console.log(this.value)
  }
}

class ScientificCalculator extends Calculator {
  	square(){
      this.value *= this.value
      return this
    }
} 

const s = new ScientificCalculator();

s.add(10).sub(5).square().print()

*/

/* De Bounce */
/*
const now = new Date().getTime();
const last =0;
const delay= 5000;

if(now-last > delay){
  console.log(true);
}else{
  console.log(false);
}

const debounce = (fn,delay)=>{

	let timeoutID;
  return function(...args){
  
  if(timeoutID){
  	clearTimeout(timeoutID);
  }
  
   timeoutID = setTimeout(()=>{
  fn(...args);
  },delay)
  
  } 
}


document.getElementById('myid').addEventListener('click', debounce((e)=>{console.log('Clicked')},2000) )
*/

/* Callbacks ******************/
/*
function greet(name){
  console.log(`Vanakam ${name} `)
}

function greetAravind(greetFn){
  const name = 'Aravind';
  greetFn(name)
} 

greetAravind(greet)
*/

/* Promise All */
/*
let datafile1 = fetch('https://jsonplaceholder.typicode.com/users');
let datafile2 = fetch('https://jsonplaceholder.typicode.com/posts');


Promise.all([datafile1,datafile2])
.then(res => process(res[0].json()) )
.catch(err=>{
  console.log(err)
})

function process(promise){
  promise.then(data => console.log(data))
}
*/

/*import React, { useEffect, useState } from "react";

function FetchData() {
  const [state, setState] = useState({
    data1: [],
    data2: []
  });

  let datafile1 = fetch("https://jsonplaceholder.typicode.com/users");
  let datafile2 = fetch("https://jsonplaceholder.typicode.com/posts");

  useEffect(() => {
    Promise.all([datafile1, datafile2])
      .then((res) => process1(res[0].json()))
      .catch((err) => console.log(err));

    function process1(res) {
      res.then((data) =>
        setState({
          ...state,
          data1: data
        })
      );
    }
  
  }, []);

  console.log(state.data1);
  const dummy = state.data1.map((feed) => <p key={feed.id} >
    {feed.name}
  </p>);

  return (
    <div>
      <h1>Promise All</h1>
      {dummy}
    </div>
  );
}

export default FetchData;
*/
















      
      
      
      
      
      
      
      
      
      






































































































































