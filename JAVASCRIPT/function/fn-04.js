function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));
console.log(sum(10, 20));

/* 화살표 함수 
function 키워드를 사용하지 않고 return 키워드로 실행문이 바로 시작하면
return 키워드와 중괄호를 제거하여 사용할 수 있다.
매개변수를 가질 수 있는데, 만약 매개변수가 단 한개만 있다고 가정하면 
매개변수를 감싸고 있는 소괄호를 생략할 수 있다.
*/

const sum1 = (a, b) => {
  return a + b;
};
const sum2 = (a, b) => a + b;

console.log(sum1(10, 20));
console.log(sum2(10, 20));

const a = (x) => {
  console.log("x", x);
  return x * x;
  //로직이 return으로 바로 시작하지 않기 때문에 해당코드는 중괄호 생략 불가
};

const b = () => {
  return { value: 1 };
};

const c = () => {
  value: 1;
};
console.log(c);
//중괄호로 사용된 부분이 마치 함수의 블록처럼 보이기 때문에
//자바스크립트 문법적으로 이해할 수 있는 코드가 아니라서 오류가 난다

const d = () => {
  {
    value: 1;
  }
};
//위 문제를 해결하기 위해객체 데이터를 소괄호로 묶어서 표현
