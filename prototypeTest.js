const User = require('./prototype.js');

let muk = new User('mukho', 'muk', 26);
let ko = new User('komogoon', 'ko', 18);

console.log(muk.showUser());
console.log(ko.showUser());
