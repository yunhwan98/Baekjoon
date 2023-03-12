def solution(n, times):
    answer = 0
    m = len(times)
    
    dp = [[times[i]] for i in range(m)]
    print(dp)
    #더 빨리 끝나는 심사대가 있으면 그 곳으로 갈 수 있음
    #모든 사람이 심사를 받는데 걸리는 시간을 최소
    
    
    #끝날 때 시간이 최소인 곳으로 배치를 하면됌
    
    
    # 7  : 7 14 21 28
    # 10 : 10 20 
    
    
    #2 :2 4 6 8 10 12 14
    #4 :4 8 12
    #5 :5 10
    
    
    sorted(times)
    print(times)
    
    return answer