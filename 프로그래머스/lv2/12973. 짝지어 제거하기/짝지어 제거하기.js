function solution(s)
{
    var answer = -1;
    let res = [] 
    let end = 0
    
    for(let i of s){
        res.push(i)
        end =res.length-1 

        if(end>=1 && res[end]===res[end-1]){
            res.pop()
            res.pop()
        }
        
    }
    
    answer = res.length===0 ? 1:0 
    
    return answer
}