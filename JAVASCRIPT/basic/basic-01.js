//오줌 마렵다
/* 식별자 
- 식별자는 코드 내의 변수, 함수 혹은 속성을 식별하는 문자열
- 대소문자로 구별, 유니코드 글자, $, _, 숫자(0-9, 처음시작x), 공백x, 명시적으로 지정
*/

let age = 30;
/*
데이터 선언
let - 키워드(변수)
age - 식별자
30 - 데이터
*/

function setAge() {}

const obj = {
  age: 10,
  ["my name"]: "yeaji",
  //공백 쓰고 싶다면 요렇게, 권장x
};

console.log(obj);
console.log(obj["my name"]);
console.log(obj.age);

/* 
상수 const
변하지 않는 값 대문자로 네이밍 - 해당 식별자가 상수라는 것을 알 수 있음
{key : value} - 오브젝트(객체)
string - 문자열
console.log -> 데이터를 브라우저에서 출력
*/
const NATIONALITY = "Korea";

/*
식별자 표기법
- 카멜 케이스 (Camel Case) : 첫글자 소문자로 시작, 각 단어 첫글자는 대문자 (ex. setAge)
- 스네이크 케이스 (Snake Case) : 모든 단어 소문자, 각 단어 사이를 언더바(_)로 연결 (ex. set_age)
- 파스칼 케이스 (Pascal Case) : 모든 단어의 첫글자가 대문자 (ex. SetAge)
- 케밥 케이스 (Kebab Case) : 모든 단어 소문자, 각 단어 사이를 하이픈(-)으로 연결 (ex. set-age)
*/
