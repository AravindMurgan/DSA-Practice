function print2() {

    for (let i = 0; i < 4; ++i) {
        let star = ''
        for (let j = 0; j <= i; ++j) {
            star += '* '
        }
        console.log(star)
    }
}

function print3() {

    for (let i = 1; i <= 4; ++i) {
        let number = ''
        for (let j = 1; j <= i; ++j) {
            number += j + ' '
        }
        console.log(number)
    }
}

function print4() {

    for (let i = 1; i <= 4; ++i) {
        let str = ''
        for (let j = 1; j <= i; ++j) {
            str += i + ' '
        }
        console.log(str)
    }
}

function print5() {

    for (let i = 1; i <= 4; ++i) {
        let str = ''
        for (let j = 1; j <= i; ++j) {
            str += i + ' '
        }
        console.log(str)
    }
}

function print6() {
    let n = 5;
    for (let i = 0; i < n; ++i) {
        let star = ''
        for (let j = 0; j < (n - i) + 1; ++j) {
            star += '* '
        }
        console.log(star)
    }
}


function print7() {
    let n = 5;
    for (let i = 1; i <= n; ++i) {
        let number = ''
        for (let j = 1; j <= (n - i) + 1; ++j) {
            number += j + ' '
        }
        console.log(number)
    }
}

function print8() {
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
// *
// **
// ***
// ****

function print9() {
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

// print8()
// print9()


function print10() {
    let n = 5;

    for (let i = 1; i <= (2 * n) - 1; ++i) {

        let str = ''
        let stars = i
        if (i > n) stars = (2 * n) - i

        for (let j = 1; j <= stars; ++j) {
            str += '*'
        }
        console.log(str)
    }

}


function print11() {
    let n = 5;

    for (let i = 1; i <= n; ++i) {

    }

}

function print12() {
    let n = 5;

    for (let i = 0; i < n; ++i) {
        let start = 1;
        let nums = ''
        if (i % 2 === 0) {
            start = 1
        } else {
            start = 0
        }
        for (let j = 0; j <= i; ++j) {
            nums += start
            start = 1 - start;
        }
        console.log(nums)
    }

}

function print13() {
    let n = 4;

    let space = (2 * n) + 1
    for (let i = 1; i <= n; ++i) {
        let nums = ''

        //nums
        for (let j = 1; j <= i; ++j) {
            nums += j
        }

        //space
        for (let j = 1; j <= space; ++j) {
            nums += ' '
        }


        //nums
        for (let j = i; j >= 1; --j) {
            nums += j
        }

        console.log(nums)
        space -= 2
    }

}

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1


function print14() {
    let n = 5;

    let count = 1;
    for (let i = 1; i <= n; ++i) {
        let str = ''
        for (let j = 1; j <= i; ++j) {
            str += count + ' ';
            count += 1;
        }
        console.log(str)
    }

}

function print15() {
    let n = 5;

    for (let i = 1; i <= n; ++i) {
        let str = ''
        for (let j = 0; j < i; ++j) {
            str += String.fromCharCode(65 + j) + ' '
        }
        console.log(str)
    }

}

function print16() {
    let n = 5;

    for (let i = n; i >= 1; --i) {
        let str = ''
        for (let j = 0; j < i; ++j) {
            str += String.fromCharCode(65 + j) + ' '
        }
        console.log(str)
    }

}

function print17() {
    let n = 5;

    for (let i = 0; i < n; ++i) {
        let str = ''
        for (let j = 0; j <= i; ++j) {
            str += String.fromCharCode(65 + i)
        }
        console.log(str)

    }

}

function print18() {
    let n = 4;
    for (let i = 1; i <= n; ++i) {

        let str = ''

        //space
        for (let j = 1; j <= (n - i); ++j) {
            str += ' '
        }

        //chars
        let charIdx = 0;
        let breakpoint = Math.floor(((2 * i) - 1) / 2);
        for (let j = 1; j <= (2 * i) - 1; ++j) {
            str += String.fromCharCode(65 + charIdx);

            if (j <= breakpoint) {
                charIdx += 1;
            } else {
                charIdx -= 1;
            }
        }

        //space
        for (let j = 1; j <= (n - i); ++j) {
            str += ' '
        }
        console.log(str)

    }

}
function print19() {
    let n = 5;
    let charIdx = n;
    for (let i = 1; i <= n; ++i) {

        let str = ''

        for (let j = charIdx; j <= n; ++j) {
            str += String.fromCharCode(64 + j)
        }
        console.log(str)
        charIdx -= 1;

    }

}
print19()



