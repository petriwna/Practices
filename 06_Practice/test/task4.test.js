const isEmpty = require('../src/task4');

const obj = {a: undefined};
const obj1 = {};
const obj2 = {a: 1};
const obj3 = {a: null};

describe('isEmpty', () => {
    test('is object empty', () => {
        expect(isEmpty(obj)).toBe(true);
    });
    test('is object empty', () => {
        expect(isEmpty(obj1)).toBe(true);
    });
    test('is object empty', () => {
        expect(isEmpty(obj2)).toBe(false);
    });
    test('is object empty', () => {
        expect(isEmpty(obj3)).toBe(true);
    });
});