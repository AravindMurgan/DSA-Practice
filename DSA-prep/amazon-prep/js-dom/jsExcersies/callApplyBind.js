
// call method -- used for function or object borrowing
const name = {
    firstName: 'Aravind',
    lastName: 'Murugan',
}
let printName = function (hometown, state) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown + ' and ' + state)
}

const name2 = {
    firstName: 'John',
    lastName: 'Doe'
}
console.log(printName.call(name, 'Tamil Nadu', 'Chennai'))
// console.log(printName.call(name2, 'United States', 'Texas'))
//difference between call and apply
console.log(printName.apply(name2, ['United States', 'Texas']))


//same as call method , but here it creates a copy and can be invoked later
let printMyName = printName.bind(name, 'Tamil Nadu', 'Chennai');
console.log(printMyName)
console.log(printMyName())


