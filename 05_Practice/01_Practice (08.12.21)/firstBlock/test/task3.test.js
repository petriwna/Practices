const getSum = require('../../src/task3');

describe('getSum', () => {
    test('get sum num and str if num%5 and num%3 = 0 * -1 ', () => {
        expect(getSum('60', 22)).toEqual(82);
    });
    test('get sum num and str if num%5 and num%3 = 0 * -1 ', () => {
        expect(getSum('60', 30)).toEqual(30);
    });
});