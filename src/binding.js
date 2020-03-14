// ///implicit binding
// const getPerson = function(){
//     console.log(this); //window
// }
// getPerson()

// let person = {
//     name:'Vivek',
//     printPerson: function(){
//         console.log(this) //person
//     }
// };
// person.printPerson();


// let person1 = {
//     name:'Vivek',
//     printPerson: getPerson //person1
// };
// person1.printPerson();

///explict binding - call,apply

// let printPerson = function(){
//     console.log(this)
// };

// let person2 = {
//     name:'Vivek Tiwari'
// };
// let person3 = {
//     name:'Amit Tiwari'
// };

//printPerson.call(person2)
//printPerson.apply(person2)


///Hard binding - bind()

// let printPerson = function(){
//     console.log(this)
// };

// let person2 = {
//     name:'Vivek Tiwari'
// };
// let person3 = {
//     name:'Amit Tiwari'
// };

// let getPerson = printPerson.bind(person2);
// getPerson();
// getPerson.call(person3);


/// new binding - new keyword
// let printPerson = function(name){
//     this.name=name;
// };

// let person2 = {};
// let printPerson2 = printPerson.bind(person2);
// printPerson2("vivek t");
// console.log(person2)

// let person3= new printPerson2("Amit t")
// console.log(person3)
// console.log(person2)







/////////////this and binding with arrow function//////////////




///implicit binding
// let getPerson = ()=>{
//     console.log(this);
// };
// getPerson();

// let persion = {
//     name:'Vivek Tiwari',
//     printPerson: ()=>{
//         console.log(this);
//     }
// };
// persion.printPerson();


// let persion2 = {
//     name:'Vivek Tiwari',
//     printPerson: getPerson
// };
// persion.printPerson();



///explict binding

// let getPerson = ()=>{
//     console.log(this.carname)
// };

// let persion ={
//     carname:'Ford'
// };
// getPerson.call(persion);
// getPerson.apply(persion);
// getPerson.bind(persion)();


///new binding

// let Person = (name)=>{
//     this.name=name;
// }
// let p = new Person();
// console.log(p.name)


/// why arrow function ?
// const Person = function (name) {
//     this.name = name;
//     this.getName = ()=>{
//         return this.name;
//     }
// }

// let p = new Person("Vivek T");
// console.log(p.getName())



// let person = {
//     name:'VIvek Tiwari'
// };
// let getPerson = function(){
//     console.log(this);
//     let getName = function(){
//         console.log(this);
//     };
//     getName();
// }
// getPerson.call(person);


// let getPerson = function(){
//     console.log(this);
//     let getName = ()=>{
//         console.log(this);
//     };
//     getName();
// }
// let person = {
//     name:'VIvek Tiwari'
// };
// getPerson.call(person);

