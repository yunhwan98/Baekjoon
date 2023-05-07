function solution(word) {
    var answer = 0;
    let dic = {
        A: 0,
        E: 1,
        I: 2,
        O: 3,
        U: 4        
    }
    let  li = [781, 156, 31, 6, 1]
    
    let len =word.length
    for(let i=0;i<len;i++){
        answer += dic[word[i]]*li[i]
    }
    answer+=len
    
    return answer
}