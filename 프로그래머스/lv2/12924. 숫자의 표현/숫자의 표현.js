function solution(n) {
    let sum = 0, answer = 1, remove = 1
    for(let i=1;i<n;i++){
        
        sum += i

        //sum이 n보다 클 경우
        while(sum > n){
            //remove만큼 빼주기
            sum -= remove
            //remove 증가
            remove++
        }
        
        //sum이 n과 같을 경우
        if(sum === n){
            //answer 증가
            answer++
            //remove만큼 제거
            sum -= remove
            //remove 증가
            remove++
        }
    }
    return answer
}