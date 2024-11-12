/* Promise 콜백 지옥 방지 리졸브, 리젝트 활용 위해*/
const a = (callback) => {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 1000);
};

const b = () => {
  console.log(2);
};

a(() => {
  b();
});

const c = () => {
  //callback을 대신해서 매개변수 resolve를 callback이 실행되는 부분에서 대신해서 실행시켜준다.
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 1000);
  });
};

const d = () => console.log(4);

/* Promise에서 만들어진 인스턴스에서는 then이라는 매서드를 이어서 매서드 체이닝 형식으로 활용할 수 있다 */
c().then(() => {
  d();
});

/* ---------------------------------------------------------------- */
const e = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(5);
      resolve();
    }, 1000);
  });
};

const f = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(6);
      resolve();
    }, 1000);
  });
};

const g = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(7);
      resolve();
    }, 1000);
  });
};
const h = () => console.log(8);

/* Promise 에서 만들어진 인스턴스에서는 then이라는 메서드를 이어서 체이닝 형식으로 활용할 수 있다
그리고 화살표 함수에서는 return 키워드가 바로 나오면 중괄호와 return 키워드를 생략할 수 있으므로 */

e()
  .then(f)
  .then(g)
  .then(() => h());
//Promise에서 resolve는 하나의 함수 데이터만 받으면 된다.
//resolve 비동기 작업이 성공적으로 완료되었을 때 호출되는 함수
//reject 비동기 작업이 실패하였을 때 호출되는 함수
