def solution(triangle):
    answer = 0
    n = len(triangle)
    # 거쳐간 숫자의 최댓값 구하기
    # dp 사용
    
    dp = [[0]*i for i in range(1,n+1)]
    dp[0] = triangle[0]
    

    for i in range(1,n):
        for j in range(i+1):
            #j가 맨 처음, 끝 위치인 경우
            if j==0:
                # 위 층의 값
                dp[i][j] = dp[i-1][j] + triangle[i][j]
            elif j==i:
                # 위 층의 값       
                dp[i][j] = dp[i-1][j-1] + triangle[i][j]
            #그 외의 경우
            else:
                # 윗 층의 왼쪽, 오른쪽 중 큰 값 + 현재 값으로 dp 설정
                dp[i][j] = max(dp[i-1][j],dp[i-1][j-1]) +triangle[i][j]
    #print(dp)
    answer = max(dp[-1])
    return answer
