const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0], input[1]);
function solution(A, B) {
  const add = A + B;
  const subtract = A - B;
  const multiple = A * B;
  // const divide = Math.floor(A / B); // Math.floor() - 소수점 제거
  const divide = A / B;
  const remainder = A % B;
  console.log(add);
  console.log(subtract);
  console.log(multiple);
  console.log(divide);
  console.log(remainder);
}