const executeAfter = (timeInMilli)=>{
    return new Promise((res,rej)=>{
        setTimeout(res, timeInMilli);
    });
};

module.exports = executeAfter