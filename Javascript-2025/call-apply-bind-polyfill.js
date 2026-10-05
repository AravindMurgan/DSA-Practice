function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
}

Function.prototype.myCall = function (thisArg, ...arg) {
    return this.bind(thisArg, ...arg)()
}

const mary = {
    age: 20,
    multiplier: 2
}

console.log(multiplyAge.myCall(mary, 2))