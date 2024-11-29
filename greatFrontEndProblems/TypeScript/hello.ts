// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date}!`);
  }
   
  greet("Brendan",new Date());

//   let str='hello'
//   str=3;

// Parameter type annotation
function greet2(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

greet2(34);