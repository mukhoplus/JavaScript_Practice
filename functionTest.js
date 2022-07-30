/**
 * @author Mukho
 * @description 순수 함수 + 함수 선언식
 */
/*
function sum(num1, num2){
    return num1 + num2;
}
*/

/**
 * @author Mukho
 * @description 순수 함수 + 함수 표현식
 */
let sum = function(num1, num2){
    return num1 + num2;
}
/**
 * @author Mukho
 * @description 순수 함수 + 화살표 함수
 */
let mul = (num1, num2) => num1 * num2;
/*
let mul = (num1, num2) => {
    return num1 * num2;
}
*/

const number = [1, 2, 3, 4];

for(num1 of number){
    for(num2 of number){
        console.log(`${num1} + ${num2} = ${sum(num1, num2)}`);
    }
}

console.log('----------------');

for(num1 of number){
    for(num2 of number){
        console.log(`${num1} * ${num2} = ${mul(num1, num2)}`);
    }
}

/*
JavaScript는 일급 객체 언어이기 때문에 변수에 함수를 할당할 수 있다.

함수 선언식  <- 호이스팅시 해당 파일의 맨 위로 이동
    - 어디서든 호출이 가능

함수 표현식: 함수 이름을 없애고 변수에 함수를 할당하여 사용한다.
    - 함수를 생성 한 코드 아래에서만 사용 가능
화살표 함수: 화살표 함수는 function 키워드를 제거하고 사용한다. 또한 중괄호를 제거하면 바로 데이터를 반환한다.

함수 표현식과 화살표 함수는 선언하고 사용해야 한다.
*/