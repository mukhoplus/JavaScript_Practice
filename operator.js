/*
피연산자(operand): 연산자가 연산을 수행하는 대상
    - 인수(argument)라고 하기도 함

단항 연산자(unary operator): 피연산자를 하나만 받는 연산자
    - 단항 마이너스 연산자(-x)
    - 단항 연산자 +: 숫자형이 아닌 피연산자를 숫자형으로 변환
이항 연산자(binary operator): 두 개의 피연산자를 받는 연산자
    - 이항 연산자(x - y)

할당 연산자(assignment operator) =
복합 할당 연산자 += -= *= /= %=
증가/감소 연산자 n++, n--(전위형, prefix form), ++n, --n(후위형, postfix form)
*/

let num1 = 50;
let num2 = 25;
console.log(String(num1) + String(num2)); // '5025'
console.log(String(num1) + num2); // '5025'
console.log(num1 + String(num2)); // '5025'
// 한개 이상의 피연산자가 문자형일 경우, + 연산은 문자열의 병합이 된다.
console.log(num1 + num2 + '1'); // 751 -> 숫자는 숫자의 더하기가 수행됨.
// -, /는 문자열(숫자)를 숫자로 변환 후 연산을 수행한다.
console.log(+true); // 1

console.log(num1 + num2); // 75
console.log(num1 - num2); // 25
console.log(num1 * num2); // 1250
console.log(num1 / num2); // 2
console.log(num1 % num2); // 0(나머지)
console.log(num1 ** 2); // 2500(거듭제곱)

let num3 = 100 - (num1 = num2 + 5);
console.log(num1, num2, num3); // 30, 25, 70
