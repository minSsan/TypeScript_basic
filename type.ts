// string
let str :string = 'hi';

// number
let num :number = 10;

// boolean
let bool :boolean = true;

// object
// array
let arr :number[] = [1, 2, 3];
let arr2 :Array<number> = [1, 2, 3];

// tuple
let tuple :[string, number] = ['hi', 10];

// enum
enum Fruits { Apple, Orange, Lemon }
let red :Fruits = Fruits.Apple;

// Any - 모든 타입에 대해서 허용한다는 의미
let anything :any = 'hi';
anything = 10;
anything = ['a', 2, true];

// void - 변수에서 사용할 때는 undefined와 null만 할당, 함수에는 반환 값이 없을 때 사용
let unuseful :void = undefined;
function notuse() :void {
    console.log('sth');
}

// never - 함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입
function neverEnd() :never {
    while (true) {
        
    }
}