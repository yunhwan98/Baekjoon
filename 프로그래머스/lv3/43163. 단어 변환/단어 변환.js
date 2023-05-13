function solution(begin, target, words) {
    var answer = 0;
    let n =words[0].length
    let v = {}
    for(let i of words){
        v[i] =false
    }
    let ans=[]

    function next(a,words){
      
        let res =[]
        for(let i of words){
       
            let cnt = 0
            for(let j=0;j<n;j++){
                if(i[j]!==a[j]){
                    cnt+=1
                }
            }     
            if(cnt===1 && v[i]===false) {        
                res.push(i)
                v[i]=true         
            }
        }    

        return res
    }
    
    function dfs(cur,cnt){
       
        if(cur===target){
            answer= cnt
            return true
        }
        let arr =next(cur,words)

        if(arr.length>0){
                
            for(let i of arr){
                dfs(i,cnt+1)
            }
        }
    }
    
    dfs(begin,0)
    
    return answer
}