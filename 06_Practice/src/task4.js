module.exports = isEmpty;

function isEmpty(obj) {
    const objectKeys = Object.keys(obj);
    if (objectKeys.length === 0) {
        return true;
    }
    return !objectKeys.filter((key) => obj[key] || obj[key] === 0 || obj[key] === false).length;
}