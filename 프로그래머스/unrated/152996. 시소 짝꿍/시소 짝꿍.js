function solution(weights) {
    var answer = 0;
    weights.sort((a,b)=>a-b)
    let dic = {}
    //1 1
    //1 2
    //2 3
    //3 4
    
    for(let i of weights){
        if(dic[i]===undefined) dic[i]=1 
        else dic[i]+=1
    }
    
    for(let i of Object.keys(dic)){
        
        //서로 같은 거리
        answer += parseInt((dic[i]*(dic[i]-1))/2)
        
        
        //2m 4m 거리
        if(dic[2*i]) answer+= (dic[i]*dic[2*i])
        
        //2m 3m 거리
        if(dic[3*i/2]) answer+=(dic[i]*dic[3*i/2])
            
        if(dic[4*i/3]) answer+=(dic[i]*dic[4*i/3])
    }
    
    
    
    return answer;
}