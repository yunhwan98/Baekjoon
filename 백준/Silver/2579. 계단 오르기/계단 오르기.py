n = int(input())

arr = [int(input()) for _ in range(n)]

#규칙
#계단은 한 계단 or 두 계단
#연속된 3계단 x (사작점 포함 x)
#마지막 도착 계단은 밟아야 함
dp = [[0] * (n) for _ in range(2)]

#dp[0] 전 계단 + 현재 계단
#dp[1] 전 전 계단 +현재 계단

dp[0][0] = arr[0]
dp[1][0] = arr[0]

if n>=2:
  dp[0][1] = arr[0] + arr[1]
  dp[1][1] = arr[1]
  
  for i in range(2, n):
      #dp[0][i]의 이전계단은 한 계단 차이가 나기 때문에 이전 계단은 dp[1][i-1]계단이 되어야 함
      dp[0][i] = dp[1][i - 1] + arr[i]
      #dp[1][i]의 이전계단은 두 계단차이가 나기 때문에 이전 계단은 dp[0][i-2],dp[1][i-2] 중 값이 큰 계단이 되어야함 
      dp[1][i] = max(dp[0][i - 2], dp[1][i - 2]) + arr[i]

print(max(dp[0][n - 1], dp[1][n - 1]))
