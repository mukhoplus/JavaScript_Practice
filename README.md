# JavaScript

- 자바스크립트는 브라우저에서만 쓸 목적으로 고안된 언어이지만, 지금은 다양한 환경에서 쓰이고 있다.
- 오늘날 자바스크립트는 브라우저 환경에서 가장 널리 사용되는 언어로, HTML/CSS와 완전한 통합이 가능하다.
- 자바스크립트로 transfile할 수 있는 언어는 많고, 각 언어마다 고유한 기능을 제공한다.

## Semicolon

- 자바스크립트에서는 줄 바꿈이 있다면 세미콜론을 생략할 수 있다.
    - 암시적 세미콜론으로 해석하며, 이는 세미콜론 자동 삽입(Automatic semicolon insertion)이라고 한다.
    - 대부분의 경우 줄 바꿈은 세미콜론을 의미하나, 항상은 아니다.

## 문자열 비교

- 자바스크립트에서 문자열 비교는 '유니코드' 순이다.
    - 'Z' > 'A', 'ABC' > 'ABB', 'Bee' > 'Be'
- 자바스크립트에서는 비교하려는 값의 자료형이 다르면 이 값들을 숫자형으로 바꾼다.
    - '2' > 1, '01' == 1, true == 1, false == 0, '' == false
- 일치 연산자(strict equality operator) ===
    - 위에서처럼 ==는 0과 false를 구분하지 못한다.
    - 일치 연산자 ===는 형의 type이 동등한지까지 파악한다.
        - 0 === false -> false
        - null == undefined -> true, null === undefined -> false

- 일치 연산자 ===를 제외한 비교 연산자의 피연산자에 undefined나 null이 오지 않도록 특별히 주의해야 한다.
- undefined나 null이 될 가능성이 있는 변수가 <, >, <=, >=의 피연산자가 되지 않도록 주의해야 한다.(명확한 의도를 갖고 있지 않은 이상)
    - 만약 변수가 undefined나 null이 될 가능성이 있다고 판단되면 이를 따로 처리하는 코드를 추가해야 한다.

## 논리 연산자

- OR: ||
- AND: &&
    - 맨 왼쪽부터 조건을 비교함
    - 이런 문법으로 if문을 짧게 줄이는 용도로도 사용 가능하지만, 지양해야 한다.
        - if(1 > 0) console.log('0보다 크다');
        - (1 > 0) && console.log('0보다 크다');
- NOT: !

## nullish 병합 연산자 ??

- 피연산자 중 '값이 할당된' 변수를 빠르게 찾을 수 있다.
- ??는 변수에 기본값을 할당하는 용도로도 사용할 수 있다.
    - height = height ?? 100; // height가 null이나 undefined인 경우, 100을 할당

## 함수 이름짓기

- 함수가 어떤 동작을 하는지 축약해서 설명해주는 동사를 접두어로 붙여 함수 이름을 만든다.
    - show: 무언가를 보여주는 함수
    - get: 값을 반환함
    - calc: 무언가를 계산함
    - create: 무언가를 생성함
    - check: 무언가를 확인하고 boolean값을 반환함
- 함수는 동작 하나만 담당해야 한다.
    - 함수가 길어지면 분리해 작성하라.
        - 테스트와 디버깅, 이해하기 쉽다.

## 함수 표현식

```javascript
// 일반 함수
function sum(a, b){
    return a + b;
}

// 함수 표현식
let sum = function(a, b){
    return a + b;
}

// 화살표 함수
let sum = (a, b) => a + b;
let sum = (a, b) => {
    let result = a + b;
    return result;
}
```

## 콜백 함수(Callback Function)

- 파라미터로 함수를 전달하는 함수
- 함수의 내부에서, 파라미터로 전달받은 함수를 실행하는 함수

## 콘솔로 값 입력 받기

- [참고](https://bluehorn07.tistory.com/49)
