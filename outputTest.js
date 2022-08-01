const txt = '묵호\\';
const arr = ['묵호\\', 26];
const obj = {name: '묵호\\', age: 26};

console.log(obj); // { name: '묵호\\', age: 26 }
console.log(JSON.stringify(obj)); // {"name":"묵호\\","age":26}
process.stdout.write(`{ name: ${obj.name}, age: ${obj.age} }`); // { name: 묵호\, age: 26 }
console.log();
console.log('---------------------');
console.log(arr); // [ '묵호\\', 26 ]
console.log(JSON.stringify(arr)); // ["묵호\\",26]
process.stdout.write(`${arr}`); // 묵호\,26
console.log();
process.stdout.write(`[${arr}]`); // [묵호\,26]
console.log();
process.stdout.write(`[ name: ${arr[0]}, age: ${arr[1]} ]`); // [ name: 묵호\, age: 26 ]
console.log();
console.log('---------------------');
console.log(txt); // '묵호\'
console.log(JSON.stringify(txt)); // "묵호\\"
process.stdout.write(`${txt}`); // 묵호\
console.log();
console.log('---------------------');
console.log(arr[0], arr[1]) // 묵호\ -굿-
process.stdout.write(`${arr[0]} ${arr[1]}`); // 묵호\ -굿-
console.log();
console.log('---------------------');
console.log(obj.name, obj.age) // 묵호 26
process.stdout.write(`${obj.name} ${obj.age}`); // 묵호 26
console.log();
console.log('---------------------');
