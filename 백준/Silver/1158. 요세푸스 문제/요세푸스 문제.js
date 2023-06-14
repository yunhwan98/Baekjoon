//N명 중 K번째 사람 제거
//남은 인원으로 원을 따라 과정 반복
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let n = +input[0]
let k = +input[1]
let arr= []
let answer= []
let len = n
let next= (k-1)%n

for(let i=1;i<=n;i++){
  arr.push(i)
}


//arr가 빌때까지 반복
while(len>0){
  //answer에 제거한 사람 추가
  answer.push(...arr.splice(next,1))

  //len,next 갱신
  len = arr.length
  next = (next-1+k)%len
  
}
console.log('<'+answer.join(', ')+'>')