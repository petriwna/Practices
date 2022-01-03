module.exports = removeDuplicateArray;

function removeDuplicateArray(arr) {
    return arr.filter((item, index, arr) => arr.indexOf(item) === index);
}