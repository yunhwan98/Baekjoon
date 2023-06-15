let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arrA = new Set(input[1].split(' ').map(Number));
let arrB = new Set(input[2].split(' ').map(Number));


//answer arrA,arrB의 합집합으로 생성
let answer = new Set([...arrA, ...arrB]);

// arrA와 arrB에 공통된 원소를 answer에서 삭제
arrA.forEach((it)=>{
  if(arrB.has(it)){
    answer.delete(it)
  }
})



console.log(answer.size)
