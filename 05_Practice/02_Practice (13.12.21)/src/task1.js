module.exports = task1;
function task1(n) {
    let result = '';
    for (let i = 1; i < n + 1; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result = result.concat('threeFive');
        } else if (i % 3 === 0) {
            result = result.concat('three');
        } else if (i % 5 === 0) {
            result = result.concat('five');
        } else {
            result = result.concat(`${i}`);
        }
    }
    return result;
}
