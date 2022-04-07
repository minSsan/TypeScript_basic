function sum(a:number, b:number):number {
    return a + b;
}

// 함수를 호출할 때는, 정의된 매개변수의 개수만큼 입력해주어야 함
sum(10, 20); // 30
// sum(10, 20, 30); // error
//sum(10); // error

// a 변수 초기화 / b 넣어도 되고 안 넣어도 됨
function sum2(a:number = 100, b?:number):number {
    return a + b;
}

// 참고로 함수의 반환 값이 없는 경우에는 void 를 사용

// rest 문법이 적용된 매개변수
function sum_rest(a:number, ...nums:number[]):number {
    let totalOfNums = 0;
    for (let key in nums) {
        totalOfNums += nums[key];
    }
    // nums.forEach((num) => totalOfNums += num);
    return a + totalOfNums;
}

console.log(sum_rest(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// this
interface Vue {
    el:string;
    count:number;
    init(this:Vue): () => {};
}

let vm:Vue = {
    el: '#app',
    count: 10,
    init: function(this: Vue) {
        return () => {
            return this.count;
        }
    }
}

let getCount = vm.init();
let count = getCount();
console.log(count); // 10