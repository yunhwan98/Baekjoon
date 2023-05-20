function solution(maps) {
    var answer = [];
    const n =maps.length
    const m = maps[0].length
    const g=[]
    const res =[]
    for(let i=0;i<n;i++){  
        g.push( maps[i].split(''))
    }
    //지도의 x는 바다, 숫자는 식량
    //숫자를 모두 합한 값은 버틸 수 있는 날짜
    const dx = [-1,0,1,0]
    const dy = [0,1,0,-1]
    
    function bfs(x,y){
        let sum = 0
        let q = [[x,y]]
        sum += Number(g[x][y])
        g[x][y]='X'
        while(q.length>0){
            let [cx,cy] = q.shift()

    
            
            for(let j=0;j<4;j++){
                let nx = (cx+dx[j])
                let ny = (cy+dy[j])
                if(0<=nx && nx<n && 0<=ny && ny<m){
                   if(g[nx][ny]!=='X'){
                        q.push([nx,ny])
                        sum += Number(g[nx][ny])
                        g[nx][ny]='X'
                   }
                }           
            }
           
        }
         return sum
    }

  
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
           if(g[i][j]!=='X'){
               answer.push(bfs(i,j))

               
           }
        }
        
    }

    if(answer.length===0){
        answer.push(-1)
    }
    
    
    
    
    return answer.sort((a,b)=>a-b);
}