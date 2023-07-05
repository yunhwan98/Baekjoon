function solution(n) {
    var answer = 0;
    let n_cnt = 0 
    
    function binary(x){
        let k=0
        let cnt = 0  
        
        while(2**k<=x){
            k+=1
        }
        k-=1
   
        while(k>=0){
            if(x>=2**k){
                x-=2**k
                cnt+=1
            }
            k-=1
        }

        return cnt

    }
    n_cnt = binary(n)
    
    while(true){
        n+=1
        if( binary(n) === n_cnt) {
            answer=n
            break
        }
    }
    
    
    
  
    return answer;
}