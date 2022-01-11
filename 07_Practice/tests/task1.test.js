const {MyString} = require('../src/task1');

describe('MyString', () => {
    const myStr = new MyString();

    test('testing method MyString reverse() get reverse str', () => {
        expect(myStr.reverse('qwerty')).toEqual('ytrewq');
    });
    test('testing method MyString usFirst() get first letter upper case str', () => {
        expect(myStr.usFirst('qwerty')).toBe('Qwerty');
    });
    test('testing method MyString usWords() get first letter all words upper case str', () => {
        expect(myStr.usWords('qwerty qwerty qwerty')).toBe('Qwerty Qwerty Qwerty');
    });
});