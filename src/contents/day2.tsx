// 2일차 note
// Functions

// #3.0 Call Signatures
// 함수 타입 설정하는 법
// 1. 일반 함수
function add(a: number, b: number) {
  return a + b;
}
// 2. 화살표 함수
const addFunc = (a: number, b: number) => a + b;

// Call Signatures : 함수의 매개변수와 반환 값의 타입을 모두 type으로 미리 선언하는 것
type Add = (a: number, b: number) => number;

const addFun: Add = (a, b) => a + b;

//#3.1 Overloading
// 오버로딩은 하나의 함수가 여러개의 Call Signatures를 가졌을 때 발생함

type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);
