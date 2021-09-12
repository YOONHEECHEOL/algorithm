const fs = require('fs'); // 백준에서 node js 환경에서 입력을 받기위해 필요한 모듈
const filePath = process.platform === 'linux' ? '/algorithm/1000' : './input.txt'; // 백준 제출 시 요구되는 경로 / 로컬 환경에서 테스트 시 input.txt로 확인

let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0], input[1]); // node 1000.js - 1000 폴더에서 실행

function solution(A, B) {
  // Write your code
  console.log(A + B);
}