function stepsPyramid(n){
    const midPoint =Math.floor((n*2 - 1)/2);
    for(let row=0; row<n; row++){
        let stair=''

        let length = (n*2) -1;
        for(let col=0; col<length; col++){  
            if(midPoint - row <=col && midPoint+row >= col){
                stair+='#'
            }else{
                stair+=' '
            }
        }

        console.log(stair)
    }

}

stepsPyramid(4)