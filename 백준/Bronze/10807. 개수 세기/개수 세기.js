let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +input[0]
let arr = input[1].split(' ').map(Number);
let v = +input[2]
let cnt =0 

arr.forEach((it)=>it===v? cnt+=1: null)

console.log(cnt)