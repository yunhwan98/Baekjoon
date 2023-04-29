function solution(people, limit) {
    var answer = 0;
    let n =people.length

    //구명보트 무게 제한, 구명보트 최소값  
    // 무거운 사람 태운뒤, 가벼운 사람 태우기
    
    
    //정렬
    people.sort((a,b)=>a-b)
    
    
    while(people.length>0){
        let heavy = people.pop()
        
        if(heavy+people[0]<=limit){
            people.shift()
        }
        answer+=1
    }

    return answer;
}