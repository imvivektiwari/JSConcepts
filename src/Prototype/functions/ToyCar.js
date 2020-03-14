import Car from './Car';

const ToyCar = function(name){
    Car.call(this, 'small') // taking the reference and adding a property
    this.name=name;
}

ToyCar.prototype = Object.create(Car.prototype)  //{__proto__ : Car.prototype};
ToyCar.prototype.constructor = ToyCar;
ToyCar.prototype.getName = function() {
    return this.getName;
}

export default ToyCar;