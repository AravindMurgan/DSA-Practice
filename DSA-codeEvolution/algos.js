// A number prime or not
function isPrime(n) {
    if (n < 2) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}


console.log(isPrime(7))

// 2.isPowerOfTwo
function isPowerOfTwo(n) {
    if (n < 1) return false

    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }

    return true
    //TC: O(logn)
}

function isPowerOfTwoBitWise(n) {
    if (n < 1) return false
    a = n
    b = n - 1
    return (a & b) === 0
    //TC: O(1)
}


console.log('DD', isPowerOfTwoBitWise(9))

// 3.Factorial of a number
function factorial(n) {
    if (n == 0) return 1
    let num = n;
    for (let i = n - 1; n <= 1; i--) {
        num = num * i
    }
    return num
}

console.log('FF::', factorial(5));


///isFactorial
function isFactorial(n) {
    if (n <= 1) return 1
    let sum = 1;
    for (let i = 1; i <= n; i++) {
        sum *= i
    }

    return sum
}

console.log('ISFAC:::', isFactorial(1))