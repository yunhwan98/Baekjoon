function solution(n, stations, w) {
    var answer = 0;
    let range  = []
    let s_num = stations.length
    let width = 2*w + 1
    
    let start= 1
    let end = n
    
    
    start = 1
    end = stations[0] - w < 1 ? 1 : stations[0] - w 
    answer += Math.ceil((end-start)/width)
    
    
    for(let i=0;i<s_num;i++){
        
        if(i===s_num-1){
            start = stations[i] + w > n ? n : stations[i] + w 
            end = n
        }else{
            start = stations[i]+w+1
            end = stations[i+1]-w
        }
        answer += Math.ceil((end-start)/width)
        
  
    }
    


    return answer;
}