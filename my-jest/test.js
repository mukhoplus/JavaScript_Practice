const sum = require('./jestTest.js');

test('sum(3, 5) to be 8', () =>{
    expect(sum(3, 5)).toBe(8);
});
