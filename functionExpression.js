// 함수 표현식: 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성한다.
/*
- 함수는 값이다. 따라서 함수도 값처럼 할당, 복사, 선언할 수 있다.
- “함수 선언(문)” 방식으로 함수를 생성하면, 함수가 독립된 구문 형태로 존재하게 된다.
- “함수 표현식” 방식으로 함수를 생성하면, 함수가 표현식의 일부로 존재하게 된다.
- 함수 선언문은 코드 블록이 실행되기도 전에 처리된다. 따라서 블록 내 어디서든 활용 가능하다.
- 함수 표현식은 실행 흐름이 표현식에 다다랐을 때 만들어진다.
*/

let hi = function(){
    console.log('hi');
}
let hiName = function(name){
    console.log(`hi ${name}`);
}

let h = hi;
let hn = hiName;

h(); // hi
hi(); // hi
hn('Mukho'); // hi mukho
hiName('Mukho'); // hi mukho
