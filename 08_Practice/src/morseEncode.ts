import {MorseSymbol} from "./morseSymbol";
import {mappings} from "./mappings";

export function encode(str) {
    const spaceSymbol = ' ';
    const spaceWord = '  ';

    let result = '';
    const words = str.split(spaceSymbol);
    words.forEach((word) => {
        for (let i = 0; i < word.length; i++) {
            result+=`${foundLetterToSymbol(word.charAt(i))}${spaceSymbol}`;
        }
        result += spaceWord;
    });
    return result.trim();
}

export function foundLetterToSymbol(letter) {
    let foundLetter: MorseSymbol | undefined = mappings.find(value => value.translation == letter);

    if (foundLetter === undefined)
        return '';
    else
        return foundLetter.symbol;
}