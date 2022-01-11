

// var x = 7;

// function getName() {
//     console.log('namaste javascript');
// }

// getName();
// console.log(x);

function stringMap(str) {
    let obj = {}
    for (let char of str) {
        if (obj[char]) {
            obj[char]++
        } else {
            obj[char] = 1
        }
    }

    return obj
}


//i/p: 'hello'
// o/p: {h:1,e:1,l:2,o:1}