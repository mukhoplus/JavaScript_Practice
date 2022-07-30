const TIME = 10;

let count = 0;
console.log(`${count++}초에 시작합니다~`);

let timer = setInterval(() => console.log(`${count++}초`), 1000);
setTimeout(() => {
    clearInterval(timer);
    console.log('ㅂㅂ');
    console.log(count-1);
}, (TIME+1)*1000);
