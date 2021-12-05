function stepsRecursive(n, row=0,stair=''){
    debugger
    //BC
    if(row == n){
        return;
    }

    const midPoint = Math.floor((n*2 - 1)/2);
    let rowLength = (n*2)-1;

    if(stair.length == rowLength){
        console.log(stair)
        return stepsRecursive(n,row+1)
    }
        
       

    if(midPoint - row <= stair.length && midPoint + row >= stair.length){
        stair+='#'
    }else{
        stair+=' '
    }
    stepsRecursive(n,row,stair);

}

stepsRecursive(2)






// function stepsPyramid(n){
//     const midPoint =Math.floor((n*2 - 1)/2);
//     for(let row=0; row<n; row++){
//         let stair=''

//         let length = (n*2) -1;
//         for(let col=0; col<length; col++){  
//             if(midPoint - row <=col && midPoint+row >= col){
//                 stair+='#'
//             }else{
//                 stair+=' '
//             }
//         }

//         console.log(stair)
//     }

// }

// stepsPyramid(4)