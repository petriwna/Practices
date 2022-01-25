import {decode, findSymbolToLetter} from '../morseDecode';

describe('decode', () => {
    test('translates morse message to english', () => {
        expect(decode('... --- ...')).toEqual('SOS');
    });

    test('translates morse message to english', () => {
        expect(decode('.... . -.--   .--- ..- -.. .')).toEqual('HEY JUDE');
    });
});

describe('findSymbolToLetter', () => {
    test('find letter for symbol', () => {
        expect(decode('...')).toEqual('S');
    });

    test('find letter for symbol', () => {
        expect(decode('..-')).toEqual('U');
    });
});