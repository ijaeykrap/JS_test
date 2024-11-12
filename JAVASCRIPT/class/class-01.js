/* prototype 
자바스크립트는 프로토타입 기반 언어
객체 기본꼴(?), 말그대로 견본
자바스크립트에서 여기에 .으로 붙여놓은 함수들(메서드)을 사용자가 가져다 쓰는거(?)
내가 별도로 메서드를 만들어서 등록해서 사용하는 것도 가능
object.prototype도 있고 array.prototype 도 있다
배열에 쓸 수 있는 메소드, 객체에 쓸 수 있는 메서드 다르기 때문일꽈
*/

const fruits = new Array("사과", "바나나", "체리", "수박");

console.log(fruits);
console.log(fruits.length);
console.log(fruits.includes("샤인머스켓")); //false
console.log(fruits.includes("바나나")); //true

/* 프로토타입 아래 코드는 getName이라는 함수를 새롭게 만든 것 */

//프로토타입에 getName이라는 함수 등록 -> 활용 가능
Array.prototype.getName = function () {
  console.log(this);
};
fruits.getName();

const newArr = [];
newArr.getName();

/* 프로토타입이라는 것은 new 키워드를 통해서 만든 생성자 함수에서 반환된 결과
여기서는 fruits 라는 배열 데이터 혹은 인스턴스라고 말한다.
이렇게 인스턴스에서 쓸 수 있는 별도의 속성이나 메서드를 등록하는 객체

우리가 원시타입, 참조 타입들도 마찬가지로 다양하나 데이터들은 생성자 함수를 통해서 반환된 결과이고
우리가 그동안 생성자 함수를 사용하지 않고 각각의 데이터를 만든것은 더 쉽게 만들 수 있게 각각의 리터럴 방식으로 만들었을 뿐
*/

const user = {
  firstName: "yeaji",
  lastName: "Park",
  getFullName: function () {
    //객체 데이터 내부에서 일반 함수를 통해 메서드를 만들게 되면 this라는 키워드를 통해 접근 가능
    return `${this.firstName} ${this.lastName}`;
  },
  //객체 데이터 내부에 있는 속성에서 function 키워드를 사용하는 일반함수를 할당한다면
  //속성 뒤에 있는 콜론 (:) 기호와 function 키워드로 생략할 수 있다고도 배움
};

const user2 = {
  firstName: "yeaji",
  lastName: "Park",
};
//객체 데이터와 메서드를 일반 함수로 만들면 일반 함수에서의 this는 함수가 호출되는 곳에서 정의된다고 배웠다

/* 
1. getFullName을 복사하여 user2 내부에 똑같이 만드는 방법 
2. user.getFullName.call(user2)
*/

console.log(user.getFullName.call(user2));
//재활용 하는 코드의 가독성도 떨어지고 메서드를 빌려쓰는 구조에서 본래의 객체도 참조해야하고 여러 어려움 -> 프로토타입 사용
