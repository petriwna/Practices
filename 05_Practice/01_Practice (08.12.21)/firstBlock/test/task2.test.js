const {task2, isNotNumber, isFirstSymbolUpper, isLength, isContainsSpecials, isValid} = require('../../src/task2');

describe('task', () => {
    test('check string is valid', () => {
        expect(task2('Myfirstpassword!')).toEqual('VALID');
    });
    test('check string is valid', () => {
        expect(task2('jiuijijcer')).toEqual('INVALID');
    });
    test('check string is valid', () => {
        expect(task2(123)).toEqual('Incorrect input data');
    });
});

describe('isNotNumber', () => {
    test('check is number in string', () => {
        expect(isNotNumber('blabla')).toEqual(true);
    });
    test('check is number in string', () => {
        expect(isNotNumber('bl3abla')).toEqual(false);
    });
});

describe('isFirstSymbolUpper', () => {
    test('check is first symbol upper case', () => {
        expect(isFirstSymbolUpper('test')).toEqual(false);
    });
    test('check is first symbol upper case', () => {
        expect(isFirstSymbolUpper('Test')).toEqual(true);
    });
});

describe('isLength', () => {
    test('check string length', () => {
        expect(isLength('a')).toEqual(false);
    });
    test('check string length', () => {
        expect(isLength('qwertyuiopasdfghjklzxcv')).toEqual(false);
    });
    test('check string length', () => {
        expect(isLength('qwertyuiopa')).toEqual(true);
    });
});

describe('isContainsSpecials', () => {
    test('check has string specials symbols', () => {
        expect(isContainsSpecials('bnm')).toEqual(false);
    });
    test('check has string specials symbols', () => {
        expect(isContainsSpecials('bn!m')).toEqual(true);
    });
});

describe('isValid', () => {
    test('if is valid get string', () => {
        expect(isValid(true)).toEqual('VALID');
    });
    test('if is valid get string', () => {
        expect(isValid(false)).toEqual('INVALID');
    });
});