// console.log('hello world');

// const url = 'https://api.github.com/users/aravindMurugan'

// console.log(fetch(url).then(data=> console.log(data)));

// createOrder
// proceedToPayment
// showOrderSummary
// updateWallet

// const cart =['iPhone 15 Pro Max', 'Nike Air Jordan E3','Playstation 5 Slim 1TB'];

// const promise =createOrder(cart)
// .then(function(orderID){
//     return orderID;
// })
// .then(function(orderId){
//     return proceedToPayment(orderId);
// })
// .then(function(paymentStatus){

//     return showOrderSummary(paymentStatus);
// })
// .then(function(orderSummaryStatus){

//     return updateWallet(orderSummaryStatus);
// })
// .then(function(walletStatus){

//    console.log(walletStatus)
// })
// .catch(function(err){
//     console.log(err);
// })

// console.log('No wait for promise');

// function createOrder(){
//     const pr= new Promise(function(resolve,reject){
//         //reject('Not a valid Order');
//         resolve('1235');
//     })

//     return pr;
// }

// function proceedToPayment(orderId){
//     const pr = new Promise(function(resolve,reject){
//         resolve('Payment Successfull');
//     })

//     return pr;
// }

// function showOrderSummary(paymentStatus){

//     const pr = new Promise(function(resolve,reject){
//         resolve('Here is the OrderSummary');
//     })

//     return pr;
// }

// function updateWallet(orderSummaryStatus){
//     const pr = new Promise(function(resolve,reject){

//         setTimeout(function(){
//             resolve('Wallet Updated');
//         },5000);
   
//     })

//     return pr;
// }


// console.log(promise);
const url = 'https://api.github.com/users/aravindMurugan'

// console.log(fetch(url).then(data=> console.log(data)));

// async function myFunc(){return function change(){}};


// console.log(myFunc());


ajax(url,function(data){console.log(data)});
