console.log(String(true), String(NaN), String(null), String(1)); // true NaN null 1 
console.log(Number('12345'), Number('asdf'), Number(true), Number(undefined)); // 12345 NaN 1 NaN
console.log(Boolean('0'), Boolean(1), Boolean('mukho'), Boolean(0), Boolean('')) // true true true false false
