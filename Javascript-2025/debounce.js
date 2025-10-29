function debounce(func, wait) {
  

  return function(){
    console.log(this)
      setTimeout(()=>{
            func.apply(this,[])
      },wait)
  }
}






let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i