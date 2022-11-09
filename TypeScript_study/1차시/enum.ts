enum OS {
  WINDOW,
  MAC,
}

enum FAVORITES {
  FRUIT = "포도",
  COLOR = "하늘색",
}

const favoriteFruit: FAVORITES = FAVORITES.FRUIT;
console.log(favoriteFruit); // "포도"

// ? keyof typeof

// ? typeof
// * 마치 interface -> typeof로 지정하면 그냥 원래 형태 그대로 사용된다.
let type: typeof FAVORITES = { FRUIT: FAVORITES.FRUIT, COLOR: FAVORITES.COLOR };

// ? keyof
// * 객체의 키들을 타입으로 사용한다
let type2: keyof FAVORITES; // type2에 마우스를 올려보면 객체 프로퍼티가 출력된다. -> FAVORITES가 객체이기 때문

// ? keyof typeof
// * enum 객체의 키를 타입으로 사용한다
let type3: keyof typeof FAVORITES; // "FRUIT" | "COLOR"

type3 = "FRUIT"; // 가능
type3 = "COLOR"; // 가능
// type3 = "FOOD"; // 불가능
