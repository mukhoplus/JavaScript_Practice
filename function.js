// 함수 안에서 함수 밖의 값을 수정할 수 있다.
// 매개변수에 값을 전달하지 않으면, 그 값은 undefined가 된다.

function hello(){
    let message = 'Hi';
    console.log(message);
}
function helloName(name){
    console.log(`Hi ${name}`)
}
// 매개변수의 기본값(default value)
function test(name=''){
    if(name === '') console.log('Hello');
    else console.log(`Hello ${name}`);
}
/*
function test(name){
    if(name === undefined) name = '몰?루';
    console.log(`Hello ${name}`);
}
function test(name){
    return name ?? "Undefined"; // name의 값이 undefined면 "Undefined" 반환
}
*/

hello(); // Hi
helloName('Mukho'); // Hello
test(); // Hello
test('Mukho'); // Hello Mukho

// 함수에서 return; -> 함수 종료
