const removeDuplicateArray = require('../src/task3');
const array = [1, 2, 3, 1, 2, 'ytr', 10, 'ytr']

describe('removeDuplicateArray', () => {
    test('remove duplicate array value', () => {
        expect(removeDuplicateArray(array)).toEqual([1, 2, 3, 'ytr', 10]);
    });
});