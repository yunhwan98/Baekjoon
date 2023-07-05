def solution(m, n, puddles):
    answer = 0
    
    g = [[0]*m for _ in range(n)]
    
    for i in puddles:
        g[i[1]-1][i[0]-1] = -1
    
    g[0][0]=1
    
    for i in range(n):
        for j in range(m):
            if g[i][j]==-1: continue
            if i-1>=0 and g[i-1][j]!=-1: g[i][j]+=g[i-1][j]
            if j-1>=0 and g[i][j-1]!=-1: g[i][j]+=g[i][j-1]
                
    
    answer=g[n-1][m-1] % 1000000007
    print(g)
    
    
    
    return answer