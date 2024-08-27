// // function Dog(){
// //     console.log(this)
// // }
// // new Dog()

// // function Dog(){
// //     // console.log(this)
// //     this.bark="Woof"
// //     return 10;
// // }
// // var dog = new Dog()
// // console.log(dog)

// function Dog(){
//     var name="hello"
//     console.log(name)
// }

// "use strict"

//this Key word in global space
// console.log(this)

// //this keyword inside function
// function x(){
//     console.log(this)
// }
// x()

//this in strcit mode
//function - undefined
//without strict mode - global object

//this substitutiion
//If the value of this is undefined or null, it is converted to the global object.
//only in non strict mode
// "use strict"
//this values depends on how a function is called
const obj ={
    name:"Billy",
    sing: function(){
        console.log(this)
        var anotherFunction = function(){
            console.log(this)
        }
        anotherFunction()
    }
}
// obj.sing()

const obj2= {
    name:'Aravind'
}

obj.sing.call(obj2)