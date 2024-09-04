const getData=async (args)=>{
  console.log(args)
    const res =await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await res.json()
    console.log(data)

  }
  
  const debounce =(fn,delay)=>{
  
    let timer;
    return function(){
        let context=this.event.target
        let args=arguments
        console.log('CONTEXT::::',context)
        // console.log('ARGS::::',args)
       const clearTimeOUT= clearTimeout(timer)
      //  console.log('clearTimeOUT:::',clearTimeOUT)
        timer=setTimeout(()=>{
          fn.apply(context,args)
        },delay)
    }
  
  }
  const debounceHandler=debounce(getData,300)
  
  