var maxProfit = function(prices) {
    let 
    l=0,
    r=0,
    maxProfit=0

    while(r<prices.length){
        console.log('buy:::',prices[l],'sell:::',prices[r])
        if(prices[l] < prices[r]){
            profit = prices[r]-prices[l]
            maxProfit=Math.max(maxProfit,profit)
            // l+=1
        }else{
           l=r
        }
        r+=1
    }

    return maxProfit
};

maxProfit([7,1,5,3,6,4]);