

const expensiveFunction = (event) => {
    console.log(event)
    console.log('better expensive call')
}

const throttle = (func, limit) => {
    debugger
    let flag = true;
    return function () {
        if (flag) {
            let context = this
            let args = arguments
            func.apply(context, args)
            flag = false
            setTimeout(() => {
                flag = true
            }, limit)
        }

    }
}

const betterExpensive = throttle(expensiveFunction, 100)


window.addEventListener('resize', betterExpensive)

window.addEventListener('resize', () => { console.log('expensive call') })