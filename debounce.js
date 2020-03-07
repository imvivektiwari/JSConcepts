// const expensiveGetData = (param1, param2)=>{
//     console.log(param1, param2);
// };

// const debounse = (fn, delay)=>{
//     let timeoutId;
//     return function(...params){
//         let obj = this;
//         clearTimeout(timeoutId);
//         timeoutId=setTimeout(
//             ()=>{
//                 fn.apply(obj, params) 
//             }, delay)
//     };
// };
// getData = debounse(expensiveGetData, 500);


const expensiveGetData = (parms1, parms2)=>{
    console.log(parms1, parms2)
}

const throttle = (fn, delay)=>{
    let flag=true;
    return function(...parms){
        let obj = this;
        if(flag){
            setTimeout(()=>{
                fn.apply(obj, parms)
                flag=true;
            }, delay);
            flag=false;
        }
    }
};

const getData = throttle(expensiveGetData, 500);