import {MorseSymbol} from "./morseSymbol";
import {mappings} from "./mappings";

export function decode(code) {
    const spaceTextWord = ' ';
    const spaceWordMorse = '  ';

    let result = '';
    const words = code.split(spaceWordMorse);
    words.forEach((word) => {
        const symbolLetter = word.split(spaceTextWord)
        for (let i = 0; i < symbolLetter.length; i++) {
            result += findSymbolToLetter(symbolLetter[i]);
        }
        result += spaceTextWord;
    });
    return result.trim();
}

export function findSymbolToLetter(symbol) {
    let foundSymbol: MorseSymbol | undefined = mappings.find(value => value.symbol == symbol);

    if (foundSymbol === undefined)
        return '';
    else
        return foundSymbol.translation;
}