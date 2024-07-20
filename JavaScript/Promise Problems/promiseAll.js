

const p1 = function(){
    const pr = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("P1 Success")
        },1000);

    });

    return pr;
} 

const p2 = function(){
    const pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve("P2 Success")
        },3000);
    });

    return pr;
} 

const p3 = function(){
    const pr = new Promise((resolve,reject)=>{
       setTimeout(()=>{
            reject("P3 Fail")
        },5000);
    });

    return pr;
} 


function promiseAll(taskList){
   const result =[];
   let count=0;

   return new Promise((resolve,reject)=>{
    for(let promise of taskList){
        promise.then((val)=>{
            result.push(val)
            count+=1
    
            if(count === taskList.length){
                resolve(result)
            }
        }).catch((error)=>{
            reject(error)
        });
       }
   })
  
}

const taskList=[p1(),p2(),p3()];
//run promise.all
// console.log(promiseAll(taskList))
promiseAll(taskList)
.then(results => {
console.log("got results", results)
})
.catch(console.error);