var longestCommonSubsequence = function(text1, text2) {
    
    let i=text1.length;
    let j=text2.length;
    const dp = Array.from(text1, ()=> Array(text2.length).fill(-1))
    
    function f(i,j,dp){
    console.log('dp::::',dp)
    if(i <0 || j< 0) return 0
    
    if(dp[i][j] !== -1) return dp[i][j]

    if(text1[i] == text2[j]) return dp[i][j]= 1+f(i-1,j-1,dp)
    
    return dp[i][j]= Math.max(f(i-1,j,text1,text2,dp),f(i,j-1,text1,text2,dp))
    
    } 

    return f(i-1,j-1,dp)
};

longestCommonSubsequence('abcde','ace')