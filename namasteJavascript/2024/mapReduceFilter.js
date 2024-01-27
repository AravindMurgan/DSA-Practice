// const nums=[5,10,15,20];

// // function filterGreaterThan(num){
// //     return num > 5;
// // }

// // const output = nums.filter(filterGreaterThan5);
// // console.log(output);

// nums.reduce((acc,curr)=>{
//     console.log('acc::',acc);
//     console.log('curr>>>>',curr);
//     acc =acc+curr;
//     return acc;
// })

// console.log(nums)

// const users = [{ name: 'John', age: 20 },
// { name: 'Smith', age: 30 },
// { name: 'Adam', age: 40 }];

// const output = users.filter((user)=> user.age>20);


// const output2 = users.reduce((acc,curr)=>{
//     if(curr.age>20){
//         acc.push(curr.name);
//     }
//     console.log(acc)

//     return acc;
// },[])
// console.log(output2)

const nums =[1,2,3,4,5];

const output3=nums.reduce((acc,curr)=>{
    const nextVal =acc+curr;
    return nextVal;
},0)

console.log(output3);