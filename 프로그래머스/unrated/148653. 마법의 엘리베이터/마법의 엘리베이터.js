function solution(storey) {
    var answer = 0;

    let cur = 0
    //0층이 가장 아래층
    //방법 1.  내려 가기
    //방법 2.  올라간 다음 내려가기 (6이상일 경우)

    
    while(storey!==0){
        cur = storey%10
        
        //6이상일 경우 올리기
        if(cur >= 6){
            answer += (10 - cur)    
            storey += (10 - cur) 
            

        }else{
            answer += cur
            if(parseInt(storey/10)%10>=5){
                storey+=5
            }
        }
        storey = parseInt(storey/=10)

    }
    

    
    
    
    return answer;
}