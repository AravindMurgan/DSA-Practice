const getData=()=>{
    console.log('Fetching Data...')
  }
  
  const debounce =(fn,delay)=>{
  
    let timer;
    return function(){
        let context=this
        let args=arguments
        console.log('CONTEXT::::',context)
        console.log('ARGS::::',args)
       const clearTimeOUT= clearTimeout(timer)
       console.log('clearTimeOUT:::',clearTimeOUT)
        timer=setTimeout(()=>{
          fn.apply(context,args)
        },delay)
    }
  
  }
  const debounceHandler=debounce(getData,300)
  
  