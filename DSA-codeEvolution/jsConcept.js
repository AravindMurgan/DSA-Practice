// // 6/8/22
// // call ,apply,bind
// console.log('Global Scope', this)
// let name = {
//     firstname: 'Virat',
//     lastname: 'Kholi',
//     printFullName: function () {
//         console.log(this.firstname, ' ', this.lastname)
//     }
// }

// function testFunc() {
//     let str = 'randy orton'
//     console.log('this::', this)
// }

// testFunc()

// name.printFullName()

//7/8/2022
const loggerFunc = () => {
    console.log('Check for throttle...')
}
const throttle = (fn, delay) => {
    debugger
    let flag = true
    return function () {
        if (flag) {
            fn()
            flag = false
            setTimeout(() => {
                flag = true
            }, delay)
        }
    }
}

const normalFunc = () => {
    console.log('im normal function')
}
window.addEventListener('resize', throttle(loggerFunc, 1000))
window.addEventListener('resize', normalFunc)
console.log('hello world')