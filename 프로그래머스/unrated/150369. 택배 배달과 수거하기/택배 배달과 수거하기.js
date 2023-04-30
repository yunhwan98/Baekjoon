function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    let start = 0
    let end = n-1
    let arr =[]
    let pickup_idx = -1
    let deliver_idx = -1
    //n개 집에 배달
    //cap개 싣기 가능
    //트럭은 배달 + 빈 상자 수거
    // 최소 이동거리 구하기  
    //가장 멀리 있는 것을 먼저 해결
    
        for(let i=end;i>=0;i--){
            if(deliveries[i] || pickups[i]){
                end=i
                break
            }else{
                deliveries.pop()
                pickups.pop()
        }
        }
    
    deliver_idx=end
    pickup_idx=end
    
    while(deliveries.length>0 && pickups.length>0){
        let pickup_cnt = 0
        let deliver_cnt = 0
        
        for(let i=deliver_idx;i>=0;i--){
            if(deliveries[i]+deliver_cnt <= cap){
                deliver_cnt+=deliveries[i]
                deliveries[i]=0
            }else{
                deliveries[i] -= cap-deliver_cnt      
                deliver_idx =i
                break                
            }
      
        }
        for(let i=pickup_idx;i>=0;i--){
            if(pickups[i]+pickup_cnt <= cap){
                pickup_cnt+=pickups[i]
                pickups[i]=0
            }else{
                pickups[i] -= cap-pickup_cnt
                pickup_idx =i
                break
            }
        }
        
        arr.push(end)
        answer+= 2*(end+1)
        
        for(let i=end;i>=0;i--){
            if(deliveries[i] || pickups[i]){
                end=i
                break
            }else{
                deliveries.pop()
                pickups.pop()
            }
        }

    }
  

    return answer;
}