// 화살표 함수: 함수 표현식보다 단순하고 간결한 문법으로 함수를 만들 수 있는 방법

/*
// 일반 함수
function sum(a, b){
    return a + b;
}

// 함수 표현식
let sum = function(a, b){
    return a + b;
}
*/
let sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5

let hi = () => console.log('hi');
hi(); // hi

// 화살표 함수는 함수 표현식과 같은 방법으로 사용할 수 있다.
// 함수를 동적으로 만들 수 있다.
let age = 27;
let welcome = (age > 26) ?
    () => console.log('아이고 형님') : 
    () => console.log('ㅎㅇ');

welcome();

// 본문(Body)가 여러 줄인 화살표 함수
let sum_ = (a, b) => {
    let result = a + b;
    return result;
}
console.log(sum_(4, 7)); // 11
