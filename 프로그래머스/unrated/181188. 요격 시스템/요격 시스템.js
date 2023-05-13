function solution(targets) {
    var answer = 0;
    let start= 0
    let end = 0
    //최소의 미사일로 폭격
    let sorted =targets.sort((a,b)=>a[0]-b[0])
    let ans=[]
    
    for(let i of sorted){
       let shoot =0.1
       //초기화 상태일 때 범위 지정
        if(start===0 &&end===0){
            start=i[0]
            end=i[1]
        }
       //범위 내에 있다면
       if((start<=i[0] && i[0]<end)|| (start<i[1] && i[1]<=end)){
           if(start<i[0] && i[0]<end) start =i[0]
           if(start<i[1] && i[1]<end) end=i[1]
       }else{
           ans.push(i)
           answer+=1
           start=i[0]
           end=i[1]
       }
    }
    
    
    return  answer+1
}