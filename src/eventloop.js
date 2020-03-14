// const eventLoop = ()=>{

//     let  a=0;
//     setTimeout(()=>{
//         let time = new Date();
//         console.log(`Hello 1 - ${time.getSeconds()} ${time.getMilliseconds()}`)
//     }, 1000);

//     setTimeout(()=>{
//         while(a<999999999){
//             a++
//         }
//         let time = new Date();
//         console.log(`Hello 2 - ${time.getSeconds()} ${time.getMilliseconds()}`)
//     }, 1000);

//     setTimeout(()=>{
//         let time = new Date();
//         console.log(`Hello 3 - ${time.getSeconds()} ${time.getMilliseconds()}`)
//     }, 1000);

//     setTimeout(()=>{
//         let time = new Date();
//         console.log(`Hello 4 - ${time.getSeconds()} ${time.getMilliseconds()}`)
//     }, 1000);

// };

//let array = [1,2,3,4,5,6,7,8,9];

// array.forEach((element, index)=>{
//     console.log(element);
// });
// console.log("done");

// Array.prototype.aForEach = function (callback){   
//     let array = this;
//     array.forEach((element, index)=>{
//         setTimeout(()=>{
//             callback(element, index);
//         },0)
//     });

//     // for(let index=0; index<array.length; index++){
//     //     callback(array[index], index);
//     // }
// }

// array.aForEach((element, index)=>{
//     console.log(element);
// });







