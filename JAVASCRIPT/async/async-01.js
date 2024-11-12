/* 동기 (synchronous) 비동기 (Asynchronous)
동기 : 코드가 순차적으로 실행되는 것
비동기 : 코드가 순차적으로 실행되지 않는 것
*/

console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 1000);
console.log(4);

/* ----------------------------------------------------- */

const btnEl = document.querySelector("button");
btnEl.addEventListener("click", () => {
  console.log("버튼이 클릭되었슴니당");
});
//이벤트를 가지고 있다가 버튼이 클릭 되었을 때 함수 실행 (비동기적)

/* ----------------------------------------------------- */

/* 콜백 패턴
코드가 점점 들여쓰기 방식으로 작성되게 되는데 이를 '콜백지옥'이라고 부른다.
 */

const a = (callback) => {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 1000);
};

const b = (callback) => {
  setTimeout(() => {
    console.log(2);
    callback();
  }, 1000);
};
const c = (callback) => {
  setTimeout(() => {
    console.log(3);
    callback();
  }, 1000);
};

const d = () => {
  console.log(4);
};

//this is 콜백 지옥
a(() => {
  b(() => {
    c(() => {
      d();
    });
  });
});
