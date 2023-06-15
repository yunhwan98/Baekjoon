function solution(book_time) {
    var answer = 0;
    let minute_time = []
    let res = []
    let n = book_time.length

    for(let i of book_time){
        let start = Number(i[0].slice(0,2))*60 + Number(i[0].slice(3,))
        let end = Number(i[1].slice(0,2))*60 + Number(i[1].slice(3,))
        
        minute_time.push([start,end])
    }
    
    minute_time.sort((a,b)=>a[0]-b[0])

    for(let i of minute_time){
        let s = i[0]
        let flag = false
        
    
        for(let j=0;j<res.length;j++){
            let e = res[j][res[j].length-1][1]+10

            if(s>=e){
                res[j].push(i)
                flag = true
                break

            }
        }
        if(!flag) res.push([i])
 
    }


    answer = res.length
    
    return answer;
}