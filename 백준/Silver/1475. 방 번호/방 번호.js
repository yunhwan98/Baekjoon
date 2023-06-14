
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let n = +input
let answer = 0
let dic = {}
let str = String(n)

dic[6]=0
dic[9]=0

//숫자를 key로 설정, 개수 저장
for(let i of str){
  if(dic[i]===undefined){
    dic[i]=1
  }else{
    dic[i]+=1
  }  
}

//6,9는 공유가 가능하므로 
dic[6] = Math.ceil((dic[6]+dic[9])/2)
dic[9] = dic[6]

answer = (Object.keys(dic)).reduce((acc,cur)=> acc >dic[cur]? acc: dic[cur],0)
console.log(answer)