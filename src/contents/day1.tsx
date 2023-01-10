/* eslint-disable @typescript-eslint/no-unused-vars */
// 1일차 note

// TypeScript 변수 선언법

// 1. 데이터와 변수의 타입을 명시적으로 정의할 수 있음.
let a: boolean = true;
let b: string = 'string';
let c: number = 1;
let d: number[] = [1, 2, 3];

//2 .JavaScript 처럼 변수 생성 후 넘어갈 수도 있다. => TypeScript가 자동으로 타입을 추론.
let e = 'string';

// optional : ?를 앞에 붙이면 optional 이 된다.
const player: {
  name: string;
  age?: number;
} = {
  name: 'jiwon',
};

// Alias(별칭) : type 뒤에 대문자의 이름을 붙여 준다. 재사용에 용이.
type Player = {
  name: string;
  age?: Age;
};
type Age = number;

const jiwon: Player = {
  name: 'jiwon',
  age: 12,
};

// function : 파라미터의 타입을 지정, 괄호의 우측에 콜론과 함께 타입을 지정
function playerMaker(name: string): Player {
  return {
    name,
  };
}

// arrow function
const playerMakerArrow = (name: string): Player => ({ name: name });

// readonly :  immutability(불변성)을 부여하기 때문에, 최초 선언 후 수정 불가
const numbers: readonly number[] = [1, 2, 3, 4];

//  Tuple : Array 생성, 최소한의 정해진 길이를 가져야 함, 특정 위치에 특정 타입이 있어야 함
const playerTuple: [string, number, boolean] = ['jiwon', 1, true];
playerTuple[0] = 'hi';

// any : 비어있는 값들을 쓰면 default 값은 any가 됨 , any 사용시 TypeScript 를 빠져나와 JabaScript를 사용하게 됨.
// => 사용 권장 x
const any: any[] = [];
// undefined: 선언X 할당X
// null: 선언O 할당X
