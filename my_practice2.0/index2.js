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
/*
function palindrome(str){
  let reversed = str.split('').reverse('').join('');
  
  if(str === reversed){
    return true
  }else{
    return false
  }
  
}

log(palindrome('acca'))

*/

/*2.Interger*/

/*function myFunc(num){
  
  let reverse = num.toString().split('').reverse().join('');
  let reversed = reversed.parseInt();
  return reversed;
  
}

myFunc(123545)*/

/*3.reversewithloops 25/4/2021 */

/*function reverseString(str){
  	let reversed=''
  for(let char of str){
    reversed = char+reversed
  }
}

reverseString('hello')
*/

/*4.ReverseNumberWithLoops 25/4/2021 */

/*function reverseInt(number){
  let str = number.toString();
  let reversed=''
  for(let num of str){
    reversed=num+reversed
  }
  return parseInt(reversed)
  
}

console.log(reverseInt(12345))*/

/*5.Max 25/4/2021 */
function MaxChar(str){
  const charMap={};
  const max=0;
  const maxChar='';
  
  for(let char of str){
    if(!charMap[char]){
      charMap[char]=1;
    }else{
      charMap[char]++;

    }
  }
  
  for(let char in charMap){
    if(charMap[char] > max ){
      max=charMap[char];
      maxChar=char;
    }
  }
  return maxChar
}


MaxChar('heloooo')

















  
  
  
  
  
  
  
  
  
  
  
  
  
  



  
  
  
  
  
  
  
  
  
  
  
  
  
  











































































