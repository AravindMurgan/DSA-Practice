/*
/*
function myFunc (){
  console.log('Hello World')
}

myFunc() */

///setTimeout//
/* */
/*
setTimeout(function(){
  console.log('a');
},0)
setTimeout(function(){
  console.log('b');
},5000)
setTimeout(function(){
  console.log('c');
},10000)
*/

///***Closure***///
/*
function f1(a){
  let b = 2;
  setTimeout(function(){
    console.log(a,b)
  },2000);
}
f1(9)
*/

/*
function f2(){
  for(var i =0; i<3; i++){
    setTimeout(function(){
      console.log(i)
    },1000 * i)
  }
  
}
f2()
*/

/*
var log = console.log;

function a(r){
  return 'hello'
}

const sen = a('aasdasd');
log(sen)
*/


///////weird question////
/*
var log = console.log;
function y(){
  log(this.length);
}

var x = {
  length:5,
  method: function(y){
    arguments[0]();
  }
};

x.method(y,1);
*/
/*
var log = console.log;
log(('hi').__proto__.__proto__.__proto__)d

*/
var log = console.log;
/*DSA - Practice - 19/4/21 */
/*1.String Reversal*/
/*
function reverseString(str){
   return str.split('').reverse().join('')
}

log(reverseString('Hello'))
*/

/*2.Palindrome*/

function palindrome(str){
  let reversed = str.split('').reverse('').join('');
  
  
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  











































































