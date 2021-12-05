// // --- Directions
// // Write a function that accepts a positive number N.
// // The function should console log a step shape
// // with N levels using the # character.  Make sure the
// // step has spaces on the right hand side!
// // --- Examples
// //   steps(2)
// //       '# '
// //       '##'
// //   steps(3)
// //       '#  '
// //       '## '
// //       '###'
// //   steps(4)
// //       '#   '
// //       '##  '
// //       '### '
// //       '####'

// function steps(num){
    

//     for(let row=0; row<num; row++){
//         let stair='';
//         for(let col=0; col<num; col++){
//             if(col <= row){
//                 stair+= '#'
//             }else{
//                 stair+=' '
//             }
            
//         }
//         console.log(stair)
//     }
    
// }

// steps(5)

//recursive solution::::eg//
function printNumber(num){
    //BC
    if(num == 0){
        return
    }
    console.log(num)
    let updatedNum = num-1;
    printNumber(updatedNum);
}
printNumber(10)

function steps(num){
    
    for(let row=1 ; row<=num ; row++){
        let stair='';
        for(let col=1; col<=num; col++){
            if(col <= row){
                stair+= '#'
            }else{
                stair+=' '
            }
        }
        console.log(stair)
    }

}
steps(3)

function reverseString(str){

    if(str == ''){
        return ''
    }

    return reverseString(str.slice(1)) + str.charAt(0);
}

console.log(reverseString('hello'))