let c = 1;

if(c === 1) console.log(1);
else if(c === 2) console.log(2);
else console.log('?');

let multiQuestion = (c === 1) ? '1이다' :
    (c === 2) ? '2다' : '몰?루';
console.log(multiQuestion); // 1이다

let year = 2022;
let c2 = (year === 2022);
let result = c2 ? 'YES' : 'NO';
console.log(result); // YES
