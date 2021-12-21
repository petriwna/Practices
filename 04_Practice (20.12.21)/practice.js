//--------------------1-----------------------
function isSum(arr, num){
    let result = false;
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if(i !== j && arr[i] + arr[j] === num){
                result = true;
                return result;
            }
        }
    }
    return result;
}
//--------------------2-----------------------
function getArray(arr){
    let result = [].concat(...arr);
    return result;
}
//--------------------3-----------------------
function getNewArray(arr, size){
    let result = [];
    for (let i = 0; i < arr.length; i += size){
        result.push(arr.slice(i, i+size));
    }
    return result;
}
//--------------------3-----------------------
function isEqual(ob_1, ob_2){
    let firstObKey = Object.keys(ob_1);
    let secondObKey = Object.keys(ob_2);
    let result = firstObKey.join() === secondObKey.join();
    return result;
}