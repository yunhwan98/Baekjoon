def solution(money):
    answer = 0
    n =len(money)
    
    #dp 생성
    #dp[i][0] 집을 안털 때, dp[i][1] 집을 털 때
    
    # 1 2 3 1
    # 0 1 2 4
    # 1 2 4 3
    
    # 6 3 2 8 7
    # 0 6 6 8 14
    # 6 3 8 14 15
    ans1 = 0
    ans2 = 0
    dp = [[0,0] for _ in range(len(money))]
    dp2 = [[0,0] for _ in range(len(money))]
    dp[0][0] = 0 
    dp[0][1] = money[0]
    
    dp2[1][0] = 0
    dp2[1][1] = money[1]
    
    
    for i in range(1, len(money)):
        dp[i][0] = max(dp[i-1][0],dp[i-1][1])
        dp[i][1] = dp[i-1][0] + money[i]
        if i>1:
            dp2[i][0] = max(dp2[i-1][0],dp2[i-1][1])
            dp2[i][1] = dp2[i-1][0] + money[i]
    
    
    answer =max(dp[-2][0],dp[-2][1],dp2[-1][0],dp2[-1][1])
    

        
    #answer = max(dp[-2][1],dp[-1][0])
    
    return answer