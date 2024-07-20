//PROMISE.ALL

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve({data:[],message:"success"})},3000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("P2 Success")},1000);
})

const p3 = new Promise((resolve,reject)=>{
    setTimeowut(()=>{reject("P3 fail")},5000);
})

Promise.allSettled([p1,p2,p3]).
then(res=> console.log(res))
.catch(err=> console.error(err));