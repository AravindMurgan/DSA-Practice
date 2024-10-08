const person = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  // Shallow copy using spread operator
  const shallowCopy = { ...person };
  
  // Modify the shallow copy
  shallowCopy.name = 'Jane'; // This only changes in the shallow copy
  shallowCopy.address.city = 'Los Angeles'; // This will affect both the original and the copy
  
  console.log(person)