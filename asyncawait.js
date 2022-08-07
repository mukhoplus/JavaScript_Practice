/*
Promise: 자바스크립트 비동기 처리에 사용되는 객체
자바스크립트 비동기 처리: 특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성
*/
function print(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('묵호');
        }, 3000);
    });
}

async function test(){
    console.log('Hello');
    console.log(await print());
    console.log('bye');
}

test();

/*
의도한 출력
Hello
묵호
bye

실제 출력
Hello
묵호
bye
*/
