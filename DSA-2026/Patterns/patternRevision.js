function print1() {
    let n = 5;
    for (let i = 1; i <= n; ++i) {
        let str = ''
        for (let j = 1; j <= i; ++j) {
            str += i
        }
        console.log(str)
    }

}
// print1()
// 1
// 22
// 333
// 4444
// 55555

function print2() {
    let n = 5;
    for (let i = 1; i <= n; ++i) {

        let str = ''
        for (let j = 1; j <= (n - i) + 1; ++j) {
            str += '*'
        }
        console.log(str)
    }

}

// *****
// ****
// ***
// **
// *

function print3() {
    let n = 5;
    for (let i = 1; i <= n; ++i) {
        let str = ''
        for (let j = 1; j <= (n - i) + 1; ++j) {
            str += j
        }
        console.log(str)
    }

}


// 12345
// 1234
// 123
// 12
// 1

function print4() {
    let n = 5;
    for (let i = 1; i <= n; ++i) {

        let str = ''

        //space
        for (let j = 1; j <= (n - i); ++j) {
            str += ' '
        }

        //star
        for (let j = 1; j <= (2 * i) - 1; ++j) {
            str += '*'
        }

        //space
        for (let j = 1; j <= (n - i); ++j) {
            str += ' '
        }
        console.log(str)

    }

}

//     *
//    ***
//   *****
//  *******
// *********   

function print6() {
    let n = 5;
    for (let i = 0; i < n; ++i) {

        let str = ''

        //space
        for (let j = 0; j < i; ++j) {
            str += ' '
        }

        //star
        for (let j = 0; j <= (2 * n) - ((2 * i) + 1) - 1; ++j) {
            str += '*'
        }

        //space
        for (let j = 0; j <= (i - 1); ++j) {
            str += ' '
        }
        console.log(str)

    }

}
print6()