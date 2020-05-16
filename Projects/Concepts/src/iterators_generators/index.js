// const dragons = ['cool dragon', 'angry dragon',
//     'nasty  dragon'];

// console.log(dragons[Symbol.iterator]());
// for (let drg of dragons) {
//     console.log(drg);
// }

// const it = dragons[Symbol.iterator]();
// let ele = it.next();
// while (!ele.done) {
//     console.log(ele);
//     ele = it.next();
// }


const myIterableObj = {
    [Symbol.iterator]: function () {
        const keys = Object.keys(this);
        let index = -1;
        return {
            next: () => {
                return {
                    value: this[keys[++index]],
                    done: index === keys.length
                }
            }
        }
    },
    name: 'vivek',
    age: 22
};

//console.log(myObj[Symbol.iterator]());
//const it = myIterableObj[Symbol.iterator]();
for (let ele of myIterableObj) {
    console.log(ele);
}