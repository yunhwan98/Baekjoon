def solution(citations):
    #citations=[10, 10, 10, 10, 10]
    #citations=[3,4,5,61,62,63,70,71,72,73]

    answer = 0
    #0 1 2 3 5 5 5 6
    
    n = len(citations)
    
    #h인덱스
    # 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 
    # 나머지 논문이 h번 이하 인용되었다면 h의 최댓값

    #정렬 후 idx값을 통해서  
    # h개 이상 idx ~ len(citations)-1
    # 이중 큰 값
    

    #정렬
    citations.sort()

    h_idx = 0 

    start = 0
    end = 0
    
    # 0 1 2 5 5 5 5 1000 8000 9000 10000 10001 10002
    # 3 4 5 61 62 63 70 71 72 73
    print(citations)
    for i in range(len(citations)):
        h_idx = citations[i]
        if h_idx <= len(citations) - i:
            pass
        else:
            if i==0:
                return n
            answer = max(citations[i-1],len(citations)-i)   
            break

    
    print(answer)
    
    return answer