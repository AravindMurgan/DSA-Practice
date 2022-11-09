let name = {
    firstName: 'Aravind',
    lastName: 'Murugan'
}

let printName = function (country, state, area, code) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + country + ' ' + state, ' ' + area + code);
}

let printMyName = printName.bind(name, 'India', 'Puducherry')
console.log(printMyName('white town', 'PY'))

Function.prototype.myBind = function (...args) {
    let obj = this
    params = args.slice(1)
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

let printMyName2 = printName.myBind(name, 'India', 'Puducherry')
console.log(printMyName2('white town', 'PY'))