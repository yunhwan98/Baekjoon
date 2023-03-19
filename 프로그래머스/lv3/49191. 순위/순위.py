def solution(n, results):
    answer = 0
    
    #1-n까지 번호
    #실력이 좋으면 항상 이김
    #그래프로 생각
    #시작점 = 이긴선수, 도착점 =진 선수
    
    g = [[] for _ in range(n+1)]
    v = [0]*(n+1)
    cnt = [0] * (n+1)
    
    for i in results:
        g[i[0]].append(i[1])

    def dfs(start,arr):
        
        for i in g[start]:
            if v[i]==0:
                arr.append(i)
                v[i]=1
                dfs(i,arr)
            
        return arr

                
    for i in range(1,n+1):
        v = [0]*(n+1)
        g[i] = dfs(i,[])
        print(g[i])

    for i in range(1,n+1):
        cnt[i]+=len(g[i])
        for j in g[i]:
            cnt[j]+=1
    
    for i in range(1,n+1):
        if cnt[i]==n-1:
            answer+=1
    

    return answer