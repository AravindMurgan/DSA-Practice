// const outest = () => {
//     const outer = () => {
//         let a = 100
//         const inner = () => {
//             console.log(a)
//         }
//         return inner
//     }

//     return outer
// }

// const output = outest()()()
// // console.log(output)

//data hiding

function counter() {
    let z = 99
    function increment() {
        z++
        console.log(z)
    }
    return increment
}

const counter1 = counter()
counter1()
counter1()
counter1()

const counter2 = counter()
counter2()
