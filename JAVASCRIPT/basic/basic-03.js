/* 참조형 데이터 타입 */

/* 배열 Array */
const fruits = new Array("사과", "바나나", "체리", "멜론", "수박", "포도"); //생성자 함수 사용
console.log(fruits);

/* 
배열 리터럴 : 대괄호([])로 생성
리터럴 방식 : 기호를 활용하여 만드는 방식
배열 속 각각의 데이터 하나하나를 배열의 아이템, 배열의 요소, element라고 말함
*/
const animals = ["호랑이", "기린", "원숭이", "토끼", "고양이", "뱀"];
console.log(animals[1]); //배열 데이터 인덱싱,
console.log(animals.length);
console.log(animals[animals.length - 1]); //배열 데이터의 가장 마지막 요소 조회
console.log(animals[0]);

/* 객체 object */
const user = new Object(); //생성자 함수 사용
user.name = "yeaji";
user.age = "26";
user.job = "home protector";

console.log(user);

/*
key - value
key : 속성 혹은 프로퍼티(property)
value : 값 
key 값 고유, 순서 중요x
동일한 키 값일 경우 나중에 작성된 값으로 덮어씀
*/

/* 객체 리터럴 : 중괄호({})로 생성 */
const member = {
  name: "짱구",
  age: 5,
  job: "유치원숭",
};

console.log(member);
console.log(member.name); //점. 표기법
console.log(member["job"]); //대괄호[] 표기법

const user2 = {
  name: "amy",
  age: 20,
  freind: member,
};

console.log(user2.freind.name);
console.log(user2.freind["job"]);

const family = [user2, member]; //배열 안에 객체
console.log(family);
console.log(family[0].name);
console.log(family[1]["age"]);
