function solution(land) {
    var answer = 0;
    let n = land.length
    let dp = [];
    
    for(let i=0;i<n;i++){
        dp.push([0,0,0,0])
    }
    
    for(let i=0;i<4;i++){
        dp[0][i] =land[0][i]
    }
    
    for(let i=1;i<n;i++){
        for(let j=0;j<4;j++){
            dp[i][j]=(land[i][j] + Math.max(...dp[i-1].filter((it,idx)=>idx!==j)))   
        }
    }
    

    
    return Math.max(...dp[n-1])
    
    
    
    
}