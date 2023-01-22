// //PROMISE//
const cart = ['shirt', 'pant', 'watch']

// createOrder(cart, function () {
//     proceedToPayment()
// })

// const promise = createOrder(cart)

// console.log(promise)


const promise = createOrder(cart)
promise.then(function (orderId) {
    console.log('order ID::', orderId)
})

function validateCart() {
    return false
}

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = 'Error ,cart is not valid'
            reject(err)
        }

        const orderId = '123456'
        if (orderId) {
            resolve(orderId)
        }
    })

    return pr
}