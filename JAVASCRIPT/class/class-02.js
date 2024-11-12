/* 파스칼 케이스로 함수 생성 */
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const user = new User("yeaji", "park");
console.log(user);

const user2 = new User("kkyu", "park");
console.log(user2);

/* 
객체 리터럴 방식을 통하여 만든 객체나 함수 내부에서 this라는 키워드로 각각의 속성을 만들고 
new라는 키워드를 함께 호출해서 생성하는 객체 데이터는 같다고 볼 수 있다
객체 리터럴 방식을 사용해서 객체를 만드는 것이 훨씬 편리

위와 같은 방식의 장점은 getFullName이라는 메서드를 보다 효율적으로 사용하기 위해서
프로토타입을 통해 일반 함수를 할당해주면 됨. 화살표 함수 작성x this 키워드 정의가 달라지기 때문
*/

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(user);
console.log(user2);
console.log(user.getFullName());
console.log(user2.getFullName());
