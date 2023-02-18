def solution(k, tangerine):
    answer = 0
    t  = {}
    
    #딕셔너리에 종류별 개수 넣기
    for i in tangerine:
        if i not in t:
            t[i]=1
        else:
            t[i]+=1
            
    # 개수가 큰 순대로 정렬        
    t = dict(sorted(t.items(),key =lambda x:-x[1]))

    for i in t:
        k-=t[i]
        answer+=1
        if k <= 0: break
            
    return answer