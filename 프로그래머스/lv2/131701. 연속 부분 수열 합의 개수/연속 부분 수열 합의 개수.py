
def solution(elements):
    answer = 0
    

    n = len(elements)
    dp = [0]*(n+1)
    result= []

    #원형수열
    #1. elements 정렬
    #2. dp 생성 및 설정
    #3. 1부터 수열의 개수만큼 부분수열을 구해줌
    #4. 부분수열의 합을 dp를 이용하여 result에 추가
    #5. result를 set로 만들어서 중복제거 후, 개수 구하기
    
    
    for i in range(1,n+1):
        dp[i] = dp[i-1] + elements[i-1]
    
    #개수를 1부터 n까지 증가
    for l in range(1,n+1):
        # start는 0부터 n-l까지 증가
        for start in range(n):
            #end 설정
            end = (start+l) % (n)
        
            if start<end :
                sum_elements =dp[end] -dp[start]
            elif start>end:
                sum_elements =dp[-1]-dp[start]+dp[end]
            else:
                sum_elements = dp[n]

            result.append(sum_elements)


    answer = len(set(result))
    return answer