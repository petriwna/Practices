import {encode, foundLetterToSymbol} from "../morseEncode";

describe('encode', () => {
    test('text translates to morse message', () => {
        expect(encode('SOS')).toEqual('... --- ...');
    });

    test('text translates to morse message', () => {
        expect(encode('HEY JUDE')).toEqual('.... . -.--   .--- ..- -.. .');
    });
});

describe('foundLetterSymbol', () => {
    test('found morse symbol for letter', () => {
        expect(foundLetterToSymbol('O')).toEqual('---');
    });

    test('found morse symbol for letter', () => {
        expect(foundLetterToSymbol('H')).toEqual('....');
    });

    test('found morse symbol for letter', () => {
        expect(foundLetterToSymbol(undefined)).toEqual('');
    });
});