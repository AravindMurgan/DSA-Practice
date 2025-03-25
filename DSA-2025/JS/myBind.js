// Function.prototype.myBind = function (thisArg, ...argArray) {
//     const func =this;

//     return function(){

//         return func(thisArg);
//     }
// };

// const john = {
//     age: 42,
//     getAge: function () {
//       return this.age;
//     },
//   };
  

  
//   const boundGetAge = john.getAge.myBind(john);
//   console.log(boundGetAge()); // 42
  

 function $(selector) {
    const element = document.querySelector(selector);
    return {
        
        css: function(prop,value){
  
          if(value === undefined){
  
              if(element == null) return undefined;
                     
                const val = element.style[String(prop)]
                return val === '' ? undefined:value;
          }
  
          if(element != null){
            element.style[String(prop)]= value;
          }  
  
  
          return this;
        }
    }
  }

$('button').css('color');