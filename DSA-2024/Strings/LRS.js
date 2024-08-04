function LongestRepeatingSubsequence(str){
    //code here
    let n=str.length
    let m= str.length
    const dp = Array.from({length:n+1},()=>Array(m+1).fill(-1))
    console.log(dp)
    function lrsUtil(n,m){
        
        if(dp[n][m] != -1) return dp[n][m]
        
        if(n <=0 || m<=0) return 0
        
        
        if(str[n-1] === str[m-1] && m != n){
            return dp[n][m]= 1+ lrsUtil(n-1,m-1)
        }else{
            
            return dp[n][m] =Math.max(lrsUtil(n-1,m),lrsUtil(n,m-1))
        }
    }
    
    return lrsUtil(n,m)
}

LongestRepeatingSubsequence('AABEBCDD')