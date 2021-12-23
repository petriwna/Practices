module.exports = task3;
function task3(str, num){
    let strNum = Number(str);
    if (num % 3 === 0 || num % 5 === 0 || num % 15 === 0){
        num = num * -1;
    }
    return num + strNum;
}