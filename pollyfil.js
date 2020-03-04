let person = {
    firstName:'Vivek',
    lastName:'Tiwari',
}

let printPersion = function(expertIn, interests){
    //console.log(this);
    console.log(this.firstName, this.lastName, expertIn, interests);
}

//printPersion.call(person, "JS", "Front-End");
//newPrint("Varanasi");

//================================================

Function.prototype.bind2 = function(...args){
    let obj = args[0];
    let params1 = args.slice(1);
    let func = this;
    return (...args2)=>{
        func.apply(obj, [...params1, ...args2]);
    }
}

newPrint = printPersion.bind2(person, "JS", "Front-End");
//newPrint("Varanasi");



Function.prototype.call2 = function(...args){
    let obj = args[0];
    let params = args.slice(1);
    let func = this;
    func.apply(obj, params);
}

//printPersion.call2(person, "JS", "Front-End");


// Function.prototype.apply2 = function(...args){
//     let obj = args[0];
//     let params = args.slice(1)[0];
//     let func = this;
//     func.call(obj, params[0], params[1]); // :( how to do this
// }

// printPersion.apply2(person, ["JS", "Front-End"]);