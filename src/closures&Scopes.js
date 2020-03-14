// ///global scope
// let x=0;
// let y=1;
// const incX = ()=>{
//     let z=0; //local scope
//     console.log(z)
//     x++; // globle scope
//     const incZ = ()=>{
//         z++; //outer function scope closure -> closure
//     };
//     console.dir(incZ);
// };
// incX();

//=======================


// const incX = ()=>{
//     let z=0; //local scope
//     const incZ = ()=>{
//         ++z; //outer function scope chain -> closure
//     };
//     return incZ;
// };
// console.dir(incX());




// const incX = ()=>{
//     let z=0; //local scope
//     const incZ = ()=>{
//         ++z; //outer function scope chain-> closure
//         let x= 1; //local scope
//         const dicZ = ()=>{
//             --z; //outer function scope chain -> closure
//             x++; //outer function scope chain -> closure
//         }
//         return dicZ;
//     };
//     return incZ;
// };

// console.dir(incX()());




//////////////// closures in a setTimeout//////////////
// const intX = ()=>{
//     let x=0;
//     setTimeout(()=>{
//         console.log(++x) //outer function scope chain -> closure
//     }, 1000)
// };
// intX();



// const incX = ()=>{
//     let x;
//     for(x=0;x<6;x++)
//     {
//         setTimeout(()=>{
//             console.log(x) //outer function scope chain -> closure
//         }, 1000)
//     }
// };
// incX();


// const incX = ()=>{
    
//     for(let x=0;x<6;x++)
//     {
//         setTimeout(()=>{
//             console.log(x) //outer function block scope -> closure
//         }, 1000)
//     }
// };
// incX();