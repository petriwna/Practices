const isAnagram = require('../src/task3');

describe('isAnagram', () =>{
    test('check is two string anagram', () => {
        expect(isAnagram('колба', 'бокал')).toEqual('колба and бокал are anagrams!');
    });
    test('check is two string anagram', () => {
        expect(isAnagram('колба', 'бок')).toEqual('колба and бок are not anagrams.');
    });
})