module.exports = task3;
function task3(str1, str2) {
    let firstWord = str1.replace(/[\s.,%]/g, '').toLowerCase().split('').sort().join('');
    let secondWord = str2.replace(/[\s.,%]/g, '').toLowerCase().split('').sort().join('');
    if (secondWord === firstWord) {
        return(str1 + ' and ' + str2 + ' are anagrams!');
    } else {
        return(str1 + ' and ' + str2 + ' are not anagrams.');
    }
}
