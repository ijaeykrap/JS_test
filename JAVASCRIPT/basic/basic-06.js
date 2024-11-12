/* 산술 연산자 */
console.log(10 + 20); //30
console.log(20 - 10); //10
console.log(20 * 10); //200
console.log(20 / 10); //2

/* 나머지 연산자를 통해 짝수/홀수 구분 */
console.log(20 % 3); //2 -> 나머지 값 반환, 나머지 연산자

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(20)); //t
console.log(isEven(31)); //f

/* 증감 연산자 Increment & Decrement */
//헷갈림
let c = 30;
console.log(c++); //30
//30 나오고 그다음에 1 증가
console.log(c); //31

let d = 30;
console.log(++d); //31
//먼저 1 나오고 30 더해짐
console.log(d); //31

let e = 30;
console.log(e--); //30
console.log(e); //29

let f = 30;

console.log(--f); //29
console.log(f); //29
