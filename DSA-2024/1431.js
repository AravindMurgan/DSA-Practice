var kidsWithCandies = function(candies, extraCandies) {
    let candiesWithExtra=[extraCandies+candies[0]]
    let result=[true]

    for(let i=1; i<candies.length; ++i){
            let isGreatest=false
            let total=candies[i]+extraCandies
            let max=0
        for(let j=0; j<candiesWithExtra.length; ++j){
            max=Math.max(max,candiesWithExtra[j])

        }
        if(total> max){
            isGreatest=true
        }

        candiesWithExtra.push(total)
        result.push(isGreatest)
        console.log('candiesWithExtra::',candiesWithExtra)
    }

    return result
};

kidsWithCandies([2,3,5,1,3],3)