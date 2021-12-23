module.exports = {task4, isPrime};
function task4(value){
    let array = [];
    array.push(isPrime(value));
    array.push(value % 2 ===0);
    array.push(value % 10 === 0);
    return array;
}

function isPrime(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) {
            return false;
        }
    return num > 1;
}
console.log(isPrime(6));