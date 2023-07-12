function solution(n,a,b)
{
    var answer = 0;
    let tmp = b
    
    if(a>b){
        b = a
        a = tmp
    }
    // 1 2 3 4 5 6 7 8
    // 1 2 6 7
    // 4 7

    //4 7
    //2 4
    //1 2
    
    
    while(a+1!==b || a%2===0){
        if(a!==1) a = a%2===1 ? (a+1)/2 : a/2
        b= b%2===1 ? (b+1)/2 : b/2
        answer+=1 
    }
    answer+=1
    return answer;
}