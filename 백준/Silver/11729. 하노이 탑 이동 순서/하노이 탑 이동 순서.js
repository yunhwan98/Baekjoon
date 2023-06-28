let fs = require('fs');
let input = fs.readFileSync("./dev/stdin").toString();

let N = Number(input); // 원판의 갯수
let cnt = 0
let ans = []

function dfs(num,start,mid,end){
  if(num===0) return

  //맨 아래 원반을 제외하고
  //나머지 원반들을 시작에서 중간으로 이동
  dfs(num-1,start,end,mid)
  //맨 아래 원반을 시작에서 마지막으로 이동
  ans.push([start,end])
  cnt+=1
  //중간 원반들을 마지막으로 이동
  dfs(num-1,mid,start,end)
}

dfs(N,'1','2','3')

console.log(cnt)
console.log(ans.map((it) => it.join(' ')).join('\n'))