function solution(n, words) {
    var answer = [];
    let len = 0
    let person = 1
    let cnt = 1
    let end = 0
    let start = 0
    
    //마지막 사람끝나면 1번부터
    //이전 단어 등장 X
    //한 글자 인정 X
    
    len = words[0].length
    end = len - 1
    if(end===0) return answer
    
    for(let i=1;i<words.length;i++){
        //차례 증가
        person = i%n +1
        if(person===1) cnt+=1
            
        //한 글자일 때
        if(len===1 || 
           //중복될 경우
           words.slice(0,i).includes(words[i]) ||
           //마지막 사람끝나면 1번부터
          words[i-1][end] !== words[i][0]
          ){

          return [person,cnt]
        }

        len = words[i].length
        end =len-1
        
    }
    
    

    return [0,0];
}