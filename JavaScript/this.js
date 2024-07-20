const obj={
    a:10,
    x:()=>{
       
        const x2=()=>{
            console.log(this);
        }
        x2();
    }
}

obj.x();