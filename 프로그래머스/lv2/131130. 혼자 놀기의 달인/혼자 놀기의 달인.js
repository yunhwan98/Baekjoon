function solution(cards) {
    var answer = 1;
    let v = cards.map((it)=>0)
    let res = [0]
    //2-100사이 수를 정한 뒤, 그 수 이하의 숫자 카드 준비
    //숫자 카드만큼 상자 준비
    //이미 열려 있는 상자를 만날때까지 상자를 열기

    function bfs(curIdx){
        let cnt = 0 
        let q = []
        q.push(cards[curIdx])
        v[curIdx]=1
        cnt+=1
        
        while(q.length>0){
           let nextIdx = q.shift()-1
   
           //방문했을 경우
           if(v[nextIdx]===1){
                continue
            }
     
            q.push(cards[nextIdx])
            v[nextIdx] = 1      
            cnt+=1   
        }
        
        return cnt
    }
    
    for(let i=0;i<cards.length;i++){
        if(v[i]===0){
            res.push(bfs(i))
        }
        
    }
    res.sort((a,b)=>b-a)
    answer = res[0] * res[1]

    
    
    
    return answer;
}