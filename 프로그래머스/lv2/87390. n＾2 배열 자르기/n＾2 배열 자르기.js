function solution(n, left, right) {
    var answer = [];
    //left-=1
    //right-=1
    
    let [l_row,l_col] = [Math.floor(left/n),left%n]
    let [r_row,r_col] = [Math.floor(right/n),right%n]
    //행
    //행
    //행
   
    //12345
    //22345
    //33345
    //44445
    //55555
    //12342234333444444
    console.log( [[l_row,l_col],[r_row,r_col]])
    
    //console.log()
    
    for(let i=l_row;i<=r_row;i++){
        
        let start = 0
        if(i===l_row) start = l_col
        
        for(let j=start;j<n;j++){
            
            i+1>j ?  answer.push(i+1) : answer.push(j+1)
            
            if(i===r_row && j===r_col) break
        }
    }
    

    
    
    
    return answer;
}