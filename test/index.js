
let fullname="Ravi";

let person = {
    fullname:'Vivek',
    getName: function(){
        console.log(this.fullname)
    }
};


let getFullName = person.getName;
getFullName();

// let person2 = {
//     fullname:'Rohan',
//     getName: function(){
//         console.log(this.fullname)
//     }
// };