const getRepeatObject = require('../src/task1');
const obj1 = {a:1, b:2};
const obj2 = {c:1, b:2};

describe('getRepeatObject', () => {
    test('find in two object intersection of objects', () => {
        expect(getRepeatObject(obj1, obj2)).toEqual({b: 2});
    });
});
