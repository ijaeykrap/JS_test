/* 함수 */

/* 1. 함수 선언문(Declaration) 
    function fn(){}
*/

/* 2. 함수 표현식(Expression)
    함수를 어디에 담음
    const fn = function (){}
    const fn = () => {}
*/

/* 함수 호이스팅(Hoisting) 
자바스크립트에서 함수 호이스팅은 함수 선언이 해당 함수의 호출보다 먼저 평가되는 개념
즉, 자바스크립트 엔진은 함수 선언을 코드의 실행 전에 '끌어 올려서' 처리하기 때문에, 
함수가 선언되기 전에 호출해도 에러가 발생하지 않는다.
따라서, 하단의 hello() 함수 호출 코드가 함수 선언 이전에 작성 되어도 작동하는 것이 바로 이 때문이다.
단, 함수 호이스팅 현상은 '함수 선언문'에서만 발생하고, 함수 표현식에서는 발생하지 않는다.
*/

hello(); //함수 호출

function hello() {
  console.log("Hello 함수 호출!");
}

const fn = function () {
  console.log("이 함수는 함수 표현식으로 작성되었습니다.");
};
