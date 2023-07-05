function solution(A,B){
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
    
    
    
    answer = A.reduce((acc,cur,idx)=>acc + A[idx]*B[idx]  ,0)
    
    

    return answer;
}