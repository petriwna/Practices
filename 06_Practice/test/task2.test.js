const isEqualObject = require('../src/task2');
const obj1 = {a:1, b:{c:2}};
const obj2 = {a:1, b:{c:1}};
const obj3 = {c:1, b:{c:1}};
const obj4 = {c:1, b:{c:1}, d:3};
const str = 'string';
const obj5 = {a:1, b:{c:1}}
const obj6 = {c:1, b:{c:1}, d:3};
const obj7 = {c:1, b:{c:1}, d:7};

describe('isEqualObject', () => {
    test('does deep object comparison', () => {
        expect(isEqualObject(obj1, obj2)).toBe(false);
    });
    test('does deep object comparison', () => {
        expect(isEqualObject(obj1, obj3)).toBe(false);
    });
    test('does deep object comparison', () => {
        expect(isEqualObject(obj1, obj4)).toBe(false);
    });
    test('does deep object comparison', () => {
        expect(isEqualObject(obj1, str)).toBe(false);
    });
    test('does deep object comparison', () => {
        expect(isEqualObject(obj1, obj5)).toBe(false);
    });
    test('does deep object comparison', () => {
        expect(isEqualObject(obj4, obj6)).toBe(true);
    });
    test('does deep object comparison', () => {
        expect(isEqualObject(obj4, obj7)).toBe(false);
    });
});