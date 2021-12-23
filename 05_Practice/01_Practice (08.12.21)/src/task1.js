function task1(str) {
    let checkingUpperCase = str.trim().toLowerCase();
    let checkingPalindrome = checkingUpperCase.split('').reverse().join('');
    if (checkingUpperCase === checkingPalindrome) {
        return true;
    } else {
        return false;
    }
}
module.exports = task1;