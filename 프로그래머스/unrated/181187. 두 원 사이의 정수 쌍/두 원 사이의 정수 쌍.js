function solution(r1, r2) {
    var answer = 0;
    let ans=[]
    answer+=(r2-r1+1)
    for(let i=1;i<r2;i++){
        a =Math.floor(Math.sqrt(r2**2-i**2))
        b = i<r1 ? Math.ceil(Math.sqrt(r1**2-i**2)):1
        answer += a-b+1
        ans.push([a,b])
 


    }

    return answer*4


}