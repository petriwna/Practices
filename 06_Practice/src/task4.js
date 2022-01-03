module.exports = isEmpty;

function isEmpty(obj){
    return (Object.keys(obj).length === 0) && (Object.values(obj));
}