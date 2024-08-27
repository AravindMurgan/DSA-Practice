// class LateBloomer {
//     constructor() {
//       this.petalCount = Math.floor(Math.random() * 12) + 1;
//     }
   
//     bloom() {
//       // Declare bloom after a delay of 1 second
//     //   setTimeout(()=> this.declare.bind(this), 1000);
//       setTimeout(() => this.declare(), 1000);
//     }
//     declare() {

//       console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
//     }
//   }
  
//   const flower = new LateBloomer();
//   flower.bloom();
//   // After 1 second, calls 'flower.declare()'
  

// function x(){
//     console.log(this)
// }
// const x2=()=>{
//     const obj={name:'aravind'}
//     const x3=()=>{
//         console.log(this)
//     }
//     x3.call(null)
// }

// x2() // window

const array=[1,2,3,4,]

console.log(Array.prototype.slice)