export default function classNames(...args) {
    const classes=[]

    args.forEach(arg=>{
      if(!arg) return 

      const argType = typeof arg

      if(argType === 'string' || argType === 'number'){
        classes.push(arg)
        return
      }

      if(Array.isArray(argType)){
        classes.push(classNames(...arg))
        return
      }

      if(argType === 'object'){
        for(let key in arg){
        if (Object.hasOwn(arg, key) && arg[key]) {
          classes.push(key);
        }
        }

        return 
      }

    })

    return classes.join(' ')
}
console.log(classNames("foo bar baz"))