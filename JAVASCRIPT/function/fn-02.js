function Hello() {
  return "Hello, World!";
  //return 키워드 이후에 작성된 코드는 동작하지 않음
}

function plusOne(num) {
  /* 방어 코드 */
  if (typeof num === "number") {
    console.log("숫자를 입력해주세요");
    return 0;
  }
  return num + 1;
}

console.log(plusOne(10)); //11
console.log(plusOne()); //NaN
