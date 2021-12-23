const getNumber = require('../src/task1');

describe('getNumber', () => {
    test('get number in console 1 to n, if number is multiple 3 get three,' +
        ' or 5 get five, or 3 and 5 get threeFive', () => {
        expect(getNumber(15)).toEqual('12three4fivethree78threefive11three1314threeFive');
    });
    test('get number in console 1 to n, if number is multiple 3 get three,' +
        ' or 5 get five, or 3 and 5 get threeFive', () => {
        expect(getNumber(10)).toEqual('12three4fivethree78threefive');
    });
});