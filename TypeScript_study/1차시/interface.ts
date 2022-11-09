// * readonly
// ? readonly - 수정 불가능 (처음 값 할당하면 이후에는 읽기만 가능)
interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
}

const user1: User = {
  name: "park",
  age: 23,
  birthYear: 2000,
};

// user1.birthYear = 2001 // error

// * 동일한 형태의 프로퍼티를 여러 개 지정하기
type Score = "A" | "B" | "C" | "D" | "F";

interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  [grade: number]: Score; // number: string 형태의 프로퍼티를 여러 개 받아올 수 있다
}

const user2: User = {
  name: "park",
  age: 23,
  birthYear: 2000,
  1: "A",
  2: "B",
  // 3: 'hello', // error
};

// * 인터페이스로 함수 정의하기
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};

// * 인터페이스로 클래스 정의하기
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

// ? implements
class BMW implements Car {
  color;
  wheels = 4;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("go");
  }
}

const car = new BMW("gray");

// ? extends
interface Benz extends Car {
  door: number;
  stop(): void;
}

// ? extends - 두 개의 클래스 확장
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}

// * bind 사용하여 함수 호출하기
// ? 매개변수가 없는 함수
interface User2 {
  name: string;
}

const Sam: User2 = { name: "Sam" };

function showName(this: User2) {
  console.log(this.name);
}

const a = showName.bind(Sam);
a(); // "Sam"

//? 매개변수가 있는 함수
interface User3 {
  name: string;
}

const sam: User3 = { name: "Sam" };

function showName2(this: User3, age: number, gender: "m" | "w") {
  console.log(this.name, age, gender);
}

const b = showName2.bind(sam);
a(23, "w"); // "Sam 23 w"
