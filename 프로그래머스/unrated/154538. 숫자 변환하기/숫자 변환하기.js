function solution(x, y, n) {
    var answer = 0;
    let Max= 1e9 
    let dp = []
    
    //dp 초기화
    for(let i=0;i<=y;i++){
        dp.push(Max)
    }
    
    dp[x]=0
    if(x+n<=y) dp[x+n]=1
    if(x*2<=y) dp[x*2]=1
    if(x*3<=y) dp[x*3]=1
    
    for(let i=x;i<=y;i++){
        if(i+n<=y) dp[i+n]= dp[i+n]<dp[i]+1 ? dp[i+n] : dp[i]+1
        if(i*2<=y) dp[i*2]= dp[i*2]<dp[i]+1 ? dp[i*2] : dp[i]+1
        if(i*3<=y) dp[i*3]= dp[i*3]<dp[i]+1 ? dp[i*3] : dp[i]+1
    }
    
    if(dp[y]===Max) dp[y] = -1
    
    answer =dp[y]
    
    return answer;
}