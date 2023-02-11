n = int(input())

arr = list(map(int, input().split()))

dp = [1] * n
#증가하는 부분 수열의 길이(LIS)

for i in range(n):
    start = i
    for j in range(i + 1, n):
        #arr[start]보다 arr[j]가 크다면
        if arr[start] < arr[j]:
            # dp[j]를 이전dp+1,dp[start] 중 큰 값으로 갱신
            dp[j] = max(dp[start] + 1, dp[j])

# 가장 큰 dp 값 반환

print(max(dp))
