

// const getData = async (arg)=>{
//     let res = await fetch("https://jsonplaceholder.typicode.com/todos/5");
//     let json = await res.json();
//     console.log(json);
// };

// const debounce = (fn, d)=>{
//     let timeoutId;
//     return function(){
//         clearInterval(timeoutId);
//         let args = arguments;
//         let context = this;
//         timeoutId = setTimeout(()=>{
//             fn.apply(context,args)
//         }, d);
//     };
// };


//const betterGetData = debounce(getData, 300);


let count=0;
const getData = async (arg)=>{
    count++
    console.log(count);
};

const throtle = (fn, d)=>{
    //let timeoutId;
    let flag=true;
    return function(){
        //clearInterval(timeoutId);
        let args = arguments;
        let context = this;
        if(flag){
            fn.apply(context, args);
            flag=false;
            setTimeout(()=>{ flag = true; }, d);
        }
    };
};

const betterGetData = throtle(getData, 500);