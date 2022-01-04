module.exports = {bind};

function bind(fn,context){
    return fn.apply(context,arguments);
}