let specialSymbol = ['!', '?', ':', '.', ' ', ','];

module.exports = {task2, isNotNumber, isFirstSymbolUpper, isLength, isContainsSpecials, isValid};
function task2(str) {
    if (typeof str === 'string') {
        return isValid(isNotNumber(str) &&
            isFirstSymbolUpper(str) &&
            isLength(str)
            && isContainsSpecials(str)
        );
    } else {
        return ('Incorrect input data');
    }
}

function isNotNumber(str) {
    let num = 0;
    let type = true;
    for (let i = 0; i < str.length; i++) {
        num = Number(str[i]);
        if (type === true && (!isNaN(num) && str[i] !== ' ')) {
            type = false;
        }
    }
    return type;
}

function isFirstSymbolUpper(str) {
    return (str[0] === str[0].toUpperCase());
}

function isLength(str) {
    return (str.length >= 2 && str.length <= 20);
}

function isContainsSpecials(str) {
    let result = false;
    specialSymbol.forEach(i => {
        if (str.includes(i)) {
            result =  true;
        }
    })
    return result;
}

function isValid(isValid) {
    if (isValid === true) {
        return('VALID');
    } else {
        return('INVALID');
    }
}



