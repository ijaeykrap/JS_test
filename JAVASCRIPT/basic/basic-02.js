/* 원시형 데이터 타입 */

/* 1. 문자열, string */
const str1 = "Hello, World";
const str2 = "World!";
const str3 = `Hello, ${str2}`; //백틱 `${데이터 바인딩}` -> Hello, World!

/* 2. 숫자, number */
const num1 = 123;
const num2 = -123;
const num3 = -123.5678;
const pi = 3.14;

console.log(num3 + undefined); //숫자 데이터와 다른 타입의 값을 연산할 경우 ->NaN
console.log(typeof (num3 + undefined)); //number
console.log(typeof pi); //number

/*
NaN(Not a Number) 
데이터 타입 자체는 숫자 데이터
특정한 숫자 값으로 표현 x -> NaN으로 표시하여 출력, 반환 
숫자 연산에 숫자가 아닌 다른 값이 포함되어있을 가능성이 있다는 것을 의미
Type Script -> 타입을 같이 기입해줌, 타입 오류 감지 가능
*/

const a = 0.1;
const b = 0.2;
console.log(a + b);
console.log(typeof (a + b));
console.log((a + b).toFixed(1));
console.log(typeof (a + b).toFixed(1));
console.log(Number(a + b).toFixed(1));
console.log(typeof Number((a + b).toFixed(1)));
/* 
toFixed() -> 소수점 한자리만 남김, 문자열로 반환 
Number() -> 숫자로 반환
*/

/*
3. Boolean 
true(참), false(거짓) 두 가지 값만 사용하는 논리 데이터
*/
const truthy = true;
const falsy = false;

if (truthy) {
  console.log("조건식이 참");
} else {
  console.log("조건식이 거짓");
}

/* 
4. Null, Undefined 
null -> 존재하지 않음, 값이 비어있다, 값을 알 수 없음, 명시적으로 표현
의도적으로 변수를 비우거나 특정 상황에서 값이 없음을 나타내기 위해 사용

undefined -> 변수가 선언, 같이 할당되지 않았음
함수가 값을 반환하지 않거나 객체에서 존재하지 않는 속성에 접근하였을 때도 undefined 반환
*/

let value1 = null; //의도적으로 빈값(개발자가 의도)

console.log(value1);
console.log(typeof value1);
// object - 원래 이곳에 객체참조가 있어야하는데 참조가 없음을 나타내는 값으로 만들어졌기 때문

setTimeout(() => {
  value1 = 30;
  console.log(value1);
}, 1000);
//비동기 - 순서대로 안 내려옴

let value2;
console.log(value2); //값을 할당하지 않았기 때문에 undefined

/* 5. 객체 타입 */
const user = {
  name: "yeaji", //key-value
  age: 32,
};
console.log(user.name);
console.log(user.age);
console.log(user.email); //undefined - email 없음
console.log(user.pw); //undefined - pw 없음
