/*
Promise: 자바스크립트 비동기 처리에 사용되는 객체
자바스크립트 비동기 처리: 특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성
*/
function print(callback){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('묵호');
        }, 3000);
    });
}

console.log('Hello');
print().then(function(data){
    console.log(data);
    return 'Bye';
}).then(function(data){
    console.log(data);
});
