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



// console.log(name)

// Set a cookie. More options are available too.
cookieStore.set('auth_token', 'abc123def');

// Async method to access a single cookie and do something with it.
cookieStore.get('auth_token').then((val)=> console.log(val))
