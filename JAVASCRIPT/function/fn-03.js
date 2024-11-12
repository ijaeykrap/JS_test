function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)); //3
console.log(sum(7)); //NaN

/* 매개변수 패턴 Parameter Pattern 
기본값 Default Value
*/

function sum1(a, b = 1) {
  //기본값 할당
  return a + b;
}

console.log(sum1(1, 2)); //1+2 = 3
console.log(sum1(7)); //7+1 = 8

/* 구조 분해 할당 */
const user = {
  name: "yeaji",
  age: 26,
};

function getName(user) {
  const { name } = user;
  return name;
  //return user.name과 동일
}

function getName2({ name }) {
  return name;
}
console.log(getName2(user));

function getEmail({ email = "이메일은 없어" }) {
  return email;
}

const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];

function getSecondItem([a, b, c]) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
}
getSecondItem(fruits);

/* 스프레드 연산자 */
function add(...rest) {
  console.log(rest);
  console.log(arguments); //유사 배열 (array-like) : 배열 데이터가 아니라서 활용도가 떨어짐

  //acc 누적값
  //cur 현재값
  return rest.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
}
