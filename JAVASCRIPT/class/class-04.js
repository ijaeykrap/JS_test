/* Getter / Setter 다시 공부해라*/

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User("Yeaji", "Park");
console.log(user1);

user1.firstName = "Yegi";
console.log(user1);

/* Full Name 수정 x -> 생성자 함수로 해당 클래스를 호출할 때, 
최초로 만들어지고 그 다음부터는 firstName이 바뀌더라도 전혀 변화가 없는 상태가 된다
이런 부분을 보완하기 위해 메서드 활용 */

console.log(user1.getFullName());

/* 함수를 호출하는 것을 더 좀 더 편리하게 쓰기 위해서 Gdtter라는 개념 도입
Getter는 값을 조회하는 용도의 메서드 */

//최초 생성만 가능, 변경이 안 됨
//getter, setter 이용
class NewUser {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value) {
    console.log(value);
    this.firstName = value.split("")[0];
    this.lastName = value.split("")[1];
    this.lastName = "";
  }
}

const user2 = new NewUser("yeaji", "park");
console.log(user2.fullName);

user2.lastName = "parc";
console.log(user2.fullName);
