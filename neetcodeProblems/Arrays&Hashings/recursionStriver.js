let n = 3
function printName(n) {
    if (n == 0) return 'I will Conqueur DSA'
    console.log('Aravind is here to Win and conquer DSA')

    console.log(printName(n - 1))
}

printName(n)