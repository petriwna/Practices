class MyString {

    reverse(str) {
        let arrStr = str.split('');
        let result = arrStr.reverse();
        return result.join('');
    }

    usFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    usWords(str) {
        let arrStr = str.split(' ');
        let result = [];
        for (let i = 0; i < arrStr.length; i++) {
            let word = arrStr[i][0].toUpperCase() + arrStr[i].slice(1);
            result.push(word)
        }
        return result.join(' ');
    }
}

module.exports.MyString = MyString;