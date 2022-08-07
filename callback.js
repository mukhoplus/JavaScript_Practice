// console.log('Hello');
// setTimeout(function(){
//     console.log('묵호');
// }, 3000);
// console.log('Bye');
/*
예상 출력
Hello
(3초 뒤) 묵호
Bye

실제 출력
Hello
Bye
(3초 뒤) 묵호

setTimeout은 WebAPI를 사용하기 때문이다.
다음 단계로 넘어가기 전, 우선 콜백 함수를 사용해보았다.
*/

// Callback Function
function cb(callback){
    setTimeout(function(){
        callback();
    }, 3000);
}
function print(){
    console.log('묵호');
}

console.log('Hello');
cb(print);
console.log('Bye');
