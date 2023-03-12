def solution(n, times):
    answer = 0
    m = len(times)
    
    #더 빨리 끝나는 심사대가 있으면 그 곳으로 갈 수 있음
    #모든 사람이 심사를 받는데 걸리는 시간을 최소
    
    
    #끝날 때 시간이 최소인 곳으로 배치를 하면됌
    

    sorted(times)
    
    start = 0
    end = times[-1] * n
    
    #이분 탐색
    while start<=end:
        mid = (start+end)//2
        sum_arr = 0
        
        #mid 시간동안 가능한 명수 구하기
        for i in range(m):
            sum_arr += mid//times[i]
        
        if sum_arr<n:
            start=mid+1

        else:
            end = mid-1       
            answer=mid
            

    return answer