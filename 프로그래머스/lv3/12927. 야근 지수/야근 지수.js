function solution(n, works) {
    var answer = 0;
    let works_len  = works.length
    //야근 피로도 : 야근 시작 시점에서 남은 일의 작업량을 제곱하여 더한 값
    //야근 피로드를 최소화하도록 일하기
    //1시간 동안 작업량 1만큼 처리 가능
    // 퇴근까지 남은 N시간과 각 일에 대한 작업량 works
    
    //야근 피로도를 줄이기 위해서는
    //가장 오래 시간이 드는 일을 더 많이 작업하는 것이 중요
    
    //내림차순으로 정렬

      if(works.reduce((a,b) => a+b) <= n) return 0;

      let sorted = works.sort((a,b) => a-b);
      const len = works.length;

      while(n) {
        const max = sorted[len-1];

        for(let i = len-1; i >= 0; i--) {
          if(sorted[i] >= max) {
            sorted[i]--;
            n--;
          }
          if(!n) break;
        }
      }
  
  return sorted.reduce((a,b) => a + Math.pow(b, 2), 0);

}