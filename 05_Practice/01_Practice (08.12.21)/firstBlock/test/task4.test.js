const {task4, isPrime} = require("../../src/task4");
describe('task4', () => {
    test('check number is prime, even, multiple 10', () => {
        expect(task4(7)).toEqual([true, false, false ]);
    });
    test('check number is prime, even, multiple 10', () => {
        expect(task4(-10)).toEqual([false, true, true]);
    });
});

describe('isPrime', () => {
    test('is number prime', () => {
        expect(isPrime(7)).toEqual(true);
    })
    test('is number prime', () => {
        expect(isPrime(6)).toEqual(false);
    })
})

