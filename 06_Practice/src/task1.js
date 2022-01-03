module.exports = getRepeatObject;

function getRepeatObject(obj1, obj2){
    const firstObjKeys = Object.keys(obj1);

    return firstObjKeys.reduce((acc = {}, key) => {
        if (obj1[key] === obj2[key]) {
            acc = {
                ...acc,
                [key]: obj1[key],
            };
        }
        return acc;
    }, {});
}