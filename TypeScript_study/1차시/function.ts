interface _User {
  name: string;
  age: number;
}

// * 함수 오버로딩
// age가 number일 때는 User 객체를 반환한다
function join(name: string, age: number): User;
// age가 string일 때는 string 을 반환한다
function join(name: string, age: string): string;

function join(name: string, age: number | string): _User | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  }
  return "나이는 숫자로 입력해주세요";
}

join("min", 23); // User 객체를 반환한다
join("min", "23"); // string을 반환한다
