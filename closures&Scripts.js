"use strict"

let x=4;
const foo = ()=>{
    let count=0, arr = ['a'];
    const bar = ()=>{
        count++;
        arr.push('b');
        x=5;
    }
    bar();
    console.log(count, arr, x);
    console.dir(bar);
};
foo();
console.log(x);
console.dir(foo);