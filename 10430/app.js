const fs = require('fs'); // 백준에서 node js 환경에서 입력을 받기위해 필요한 모듈
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 백준 제출 시 요구되는 경로 / 로컬 환경에서 테스트 시 input.txt로 확인
let input = fs.readFileSync(filePath).toString().split('\n');

// 제출용
// const line = fs.readFileSync("/dev/stdin", "utf8");
// let input = line.trim().split("\n");

input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0], input[1], input[2]);

function solution(A, B, C) {
  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
}