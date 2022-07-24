/*
자료형
- 자바스크립트에서 값은 항상 특정한 자료형에 속한다.
- 자바스크립트의 변수는 자료형에 관계없이 모든 데이터일 수 있다.
    - 어떤 순간엔 문자열이었다가, 다른 순간엔 숫자형일수도 있다.
    - 동적 타입 언어(Dynamic Type Language): 자료의 타입은 있지만 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어
1. 숫자형(Number)
    - 정수 및 부동소수점 숫자
    - +, -, *, / 연산이 가능하다.
    - 일반적인 숫자 외세 Infinity, -Infinity, NaN과 같은 특수 숫자 값(Special numeric value)이 포함된다.
        - NaN: 계산 중에 오류가 발생했다는 것을 나타내주는 값.
    - 자바스크립트에서 행해지는 수학 연산은 안전하다.
        - 0으로 나누기, 숫자가 아닌 문자열을 숫자로 취급하는 등의 이례적인 연산
        - 해당 과정에서 자바스크립트는 오류가 아닌 NaN을 반환하며 연산을 종료한다.
2. BigInt
    - 내부 표현 방식 때문에 자바스크립트에선 2^53-1(9007199254740991)보다 큰 값이나 -(2^53-1)보다 작은 값은 숫자형을 통해 표현할 수 없다.
    - BigInt형은 길이에 상관없이 정수를 나타낼 수 있다.
    - BigInt형은 정수 리터럴 끝에 n을 붙이면 나타낼 수 있다.
3. 문자형(String)
    - 따옴표로 묶은 자료형이다.
    - '과 "는 큰 차이가 없으며, 역 따옴표(backtick)으로 변수나 표현식을 감싼 후 ${...} 안에 넣어주면 원하는 변수나 표현식을 문자열 중간에 손쉽게 넣을 수 있다.
4. 불린형(Boolean)
    - true와 false 두 가지 값밖에 없는 자료형이다.
5. null
    - 어느 자료형에도 속하지 않는 값이다.
    - 다른 언어에서의 null은 존재하지 않는 객체에 대한 참조나 null pointer를 나타낼 때 사용한다.
    - 자바스크립트에서는 null을 존재하지 않는(nothing) 값, 비어 있는(empty) 값, 알 수 없는(unknown) 값을 나타내는 데 사용한다.
6. undefined
    - 어느 자료형에도 속하지 않는 값이다.
    - 값이 할당되지 않은 상태를 나타낼 때 사용한다.
        - 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당된다.
7. 객체(Object)
    - 객체형은 특수한 자료형으로, 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있다.
8. 심볼(Symbol)
    - 심볼형은 객체의 고유한 식별자(unique identifier)를 만들 때 사용한다.

0. typeof 연산자
    - 인수의 자료형을 반환한다.
    - typeof x / typeof(x) 두 가지 형태의 문법을 지원한다.
*/

console.log(Infinity, -Infinity, NaN); // 특수 숫자 값
console.log('Mukho' + 1); // 1을 문자열로 판단하고, 문자열 연산
console.log('Mukho' / 1); // NaN
console.log(NaN * 2, NaN + 2); // NaN NaN
let n = 123;
let m = 123.456;
console.log(typeof(n), typeof(m)); // number, number

let bigInt_ = 123456789012345678901234567890;
console.log(bigInt_, typeof(bigInt_)); // 1.2345678901234568e+29 number
let bigInt = 123456789012345678901234567890n;
console.log(bigInt, typeof(bigInt)); // 123456789012345678901234567890n bigint

let name = 'Mukho';
console.log(`Hi, ${name}!`); // Hi, Mukho!

console.log(true + 1, false + 1); // 2 1

console.log(null + 1, null / 1, null + NaN); // 1 0 NaN

let age;
console.log(age); // undefined

console.log(typeof({name: 'mukho', age: 26})); // object
console.log(typeof 123456); // number
console.log(typeof null, typeof console, typeof console.log); // object object function
