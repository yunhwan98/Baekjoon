function solution(operations) {
    var answer = [];
    

    for(let i of operations){
        let [cmd,num] = i.split(' ')
        if(cmd==='I'){
            answer.push(+num)
        }else{
            let target = +num===1? Math.max(...answer) :Math.min(...answer)
            let targetIdx = answer.indexOf(target)
            answer.splice(targetIdx,1)
        }        
    }
    
    if(answer.length===0){
        return [0,0]
    }
    

    return [Math.max(...answer),Math.min(...answer)];
}