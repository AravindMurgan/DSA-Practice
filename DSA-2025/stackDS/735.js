var asteroidCollision = function(asteroids) {
    const stack=[]

    for(let num of asteroids){


        while(stack.length > 0 && num < 0 && num2 > 0){
            let diff = num+num2
            console.log('diff::',diff)

            if(diff < 0){
                const num =stack.pop()
                console.log(num)
            }else if(diff ===0){
                num=0
                stack.pop()
            }else{
                num=0
            }

        }
            if(num){
                stack.push(num)
            }
                                console.log(stack)

    }

    return stack
};

asteroidCollision([10,2,-5])

