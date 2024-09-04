const person = {
    myName: 'John',
    getName() {
      return this.myName;
    },
  };
  
  
  const myName = person.getName;
  console.log(myName())