//=============this keyword=============

// function persion(){
//     console.log(this)    
// }

// const persion = ()=>{
//     console.log(this)    
// }

// const Persion = (name)=>{
//     this.name=name;
// }
// let p = new Persion();


// const Persion = function(name){
//     this.name  = name;
// }

// let p = new Persion('Vivek')
// console.log(p);


// let persion1 = {
//     firstName: 'Vivek',
//     lastName: 'Tiwari',
//     leave: {
//         getCity: ()=>{
//             this.alert();
//         }
//     }
// }


// window.city="Banaras";
// let persion = {
//     city:'Varanasi',
//     getName : function(){
//         return city;
//     }
// };
// console.log(persion.getName());



// let persion = {
//     city:'Varanasi',
//     getFoods: {
//         getName : function(){
//             return city;
//         }
//     }
// };

// console.log(persion.getFoods.getName());


// let persion = {
//     city:'Varanasi',
//     getFoods: {
//         getName : function(){
//             return this;
//         }
//     }
// };

// console.log(persion.getFoods.getName());

// let persion = {
//     city:'Varanasi',
//     getName : ()=>{
//         return this;
//     }
// };

// console.log(persion.getName());



// let persion = {
//     city:'Varanasi',
//     getFoods: {
//         getName : ()=>{
//             return this;
//         }
//     }
// };

// console.log(persion.getFoods.getName());


// const Persion = function(){
//     this.getName = ()=>{
//         console.log(this);
//     }
//     this.state = {
//         getName: function(paams) {
//             console.log(this);
//         }
//     } 
// }

// new Persion().state.getName();


// const Persion = function(){
//     this.getName = ()=>{
//         console.log(this);
//     }
//     this.state = {
//         getName: ()=>{
//             console.log(this);
//         }
//     } 
// }

// new Persion().state.getName();



// class Persion{

//     getName = ()=>{
//         console.log(this)
//     }
// }

// new Persion().getName()



// let video = {
//     title: 'a',
//     tags: ['b','c','d'],
//     showTags: function(){
//         this.tags.forEach(function(tag,index){
//             console.log(this);
//         });
//     }
// }


let video = {
    title: 'a',
    tags: ['b','c','d'],
    showTags: function(){
        this.tags.forEach(function(tag,index){
            console.log(this);
        }, this);
    }
}