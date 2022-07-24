let i = 0, j = 0;

while(i<3){
    console.log('a');
    i++;
}

// 최소 한번이라도 수행하고 싶은 경우만 사용한다.
do{
    console.log('b');
    j++;
}while(j<3);

// let k=0과 같은 형식을 인라인 변수 선언이라고 한다.
for(let k=0; k<3; ++k){
    console.log('c');
}
// for문에서 (begin; condition; step) 중 필요없는 요소는 생략할 수 있다.
for(let l=0; l<3; ){
    console.log(l++);
}

// 반복문을 빠져나올 때는 break, 다음 반복으로 넘어갈 때는 continue.
// 삼항 연산자 ? 오른쪽에는 break나 continue가 올 수 없다.
