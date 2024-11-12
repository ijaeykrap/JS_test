/* resolve, reject, event handling */

/* Promise - resolve, reject 라는 인수 두개 가짐 */

const delayAdd = (index, callback, error) => {
  setTimeout(() => {
    if (index > 10) {
      error(`${index}는 10보다 클 수 없다`);
      return;
    }
    console.log("index", index);
    callback(index + 1);
  }, 1000);
};

delayAdd(
  4,
  (res) => console.log(res),
  (error) => {
    console.log(error);
  }
);
delayAdd(
  13,
  (res) => console.log(res),
  (error) => {
    console.log(error);
  }
);

/* 에러 핸들링
정상적으로 로직이 동작하게 되면, 두번째 인수 부분의 콜백이 실행되는 것이고
정상적으로 로직이 동작하지 않으면, 세번쨰 인수 부분의 콜백이 실행되는 구조
*/

const newDelayAdd = (idx) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idx > 10) {
        reject(`${idx}는 10보다 클 수 없다`);
        return;
      }
      console.log("index", idx);
      resolve(idx + 1);
    }, 1000);
  });
};

/* Promise 인스턴스를 반환하기 때문에 then 메서드를 사용할 수 있다 
finally 메서드나 구문같은 경우에는 비동기 코드 내부의 resolve,reject가 실행되는 것과 관계 없이 항상 실행 되는 구조
*/
newDelayAdd(9)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Done!"));

const wrap = async () => {
  try {
    const res = await newDelayAdd(3);
    console.log(res);
  } catch (error) {
    console.error(error);
  } finally {
    //비동기 코드 내부의 reslove,reject 상관 없이 아묻따 실행
    console.log("완료");
  }
};

wrap();

/* async&await -> try,catch,finally
    
*/
