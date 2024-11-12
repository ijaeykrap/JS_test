function User(firstName, lastName) {
  this.firstName = firstName; //키값에 인자 넣기
  this.lastName = lastName;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}; //prototype 이용해서 함수 생성

const user = new User("yeaji", "park");
const user2 = new User("kkyu", "park");

console.log(user.getFullName());
console.log(user2.getFullName());

class NewUser {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName; //간결하게 맏름
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const user3 = new User("yeaji", "park");
const user4 = new User("kkyu", "park");

console.log(user3.getFullName());
console.log(user4.getFullName());

/* class 문법은 자바스크립트가 기존에 가지고 있었던 프로토타입이라는 방식을 내장해서 새로운 문법으로 동작하는 것을 말한다
NewUser 클라스라고 불릴 수도 있고 NewUser 함수라고 불릴 수도 있고 객체라고 불릴 수도 있지만
어떻게 불리는 지가 중요한 것이 아니라 new라는 키워드와 함께 마치 함수처럼 호출해서 변환된 인스턴스 결과를 통해서
우리가 데이터를 활용할 수 있는 점이 중요
*/
