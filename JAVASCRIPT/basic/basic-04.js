/* 형 변환 Type Conversion */

const A = 1;
const B = "1";

console.log(A == B); //동등 연산자(잘 사용 안 함) -> 형변환이 일어남
console.log(A === B); //일치 연산자(권장) -> 타입까지 비교

const C = 0;
const D = false;
const E = true;

console.log(C == D);
console.log(C == E);

/* 
참&거짓 truthy&falsy 
숫자 0 , null, undefined, false, NaN, 빈 문자 데이터 -> 거짓
*/
const fruits = ["사과", "포도", "수박", "딸기", "체리"];
const emptyArr = [];

if (fruits) {
  console.log("배열 데이터 안에 아이템이 들어있습니다.");
}

if (emptyArr.length) {
  //emptyArr.length = 0 -> 거짓
  console.log("배열 데이터 안에 아이템이 있다");
} else {
  console.log("배열 데이터 안에 아이템이 없다");
}

Number();
String();
Boolean();
