/* 데이터 타입 확인 */

const num = 100;
console.log(typeof num); //number
console.log(typeof "Hello"); //string
console.log(typeof "Hello" === "string"); //true
console.log(typeof false === "boolean"); //true
console.log(typeof undefined === "undefined"); //true
console.log(typeof null === "null"); //flase

console.log(typeof null); //object
console.log(typeof []); //object
console.log(typeof {}); //object
/* 
자바스크립트는 object 기반 
배열은 key값으로 인덱스를 가지는 객체임
*/

console.log([].constructor === Array); //[].constructor -> 배열 생성자
console.log({}.constructor === Object); //{}.constructor -> 객체 생성자

/* null 데이터는 어떻게 타입을 확인할 수 있을까? */
console.log(Object.prototype.toString.call(null)); //[object Null]
console.log(Object.prototype.toString.call(null).slice(8, -1)); //null

/* 코드 재사용 */
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(checkType(null)); //null
console.log(checkType(222)); //number
console.log(checkType("뀨")); //number
console.log(checkType([])); //array
console.log(checkType({})); //object

//복잡한 로직을 함수에 집어넣어서 편하게 반복 사용

console.log(Object.prototype);

//오늘 내용 복습, 블로그 댓글 달기
