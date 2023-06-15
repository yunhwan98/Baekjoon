const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const n = input[0];
const k = input[1];
const arr = input.slice(2,);
let obj = {}
let answer = 0

for(let i=1;i<=6;i++){
  obj[i]=[0,0]
}

for(let i=0;i<arr.length;i+=2){
  obj[arr[i+1]][arr[i]] += 1
}

Object.values(obj).forEach((it)=>answer+=(Math.ceil(it[0]/k) +Math.ceil(it[1]/k) ))

console.log(answer)