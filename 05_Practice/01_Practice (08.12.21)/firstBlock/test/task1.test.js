const isPalindrome = require("../../src/task1");

describe('isPalindrome', () => {
    test('check string is palindrome', () =>{
        expect(isPalindrome('мадам Мад ')).toEqual(false);
    });
    test('check string is palindrome', () =>{
        expect(isPalindrome('мадам Мадам ')).toEqual(true);
    });
});
