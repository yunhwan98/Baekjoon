function solution(n, edge) {
    var answer = 0;

    let arr = Array.from(Array(n+1),()=>[])
    let v = Array(n+1).fill(0)
    let max= 0
    
    
    for(let i of edge){
        let [a,b] = i
        arr[a].push(b)
        arr[b].push(a)
    }
    
    
    function bfs(){
        let q=[]
        q.push(1)
        v[1] = 0
        
        
        while(q.length>0){
            let start = q.shift()
            
            for(let i of arr[start]){
                if(v[i]>0 || 1===i) continue
                v[i]=v[start]+1
                q.push(i)
            }
        }
        
    }

    bfs()
    max=v.reduce((acc,cur)=> acc>cur ? acc :cur ,v[0])    
    v.map((it)=>{
         if(it===max) answer+=1
    })
       
    return answer;
}