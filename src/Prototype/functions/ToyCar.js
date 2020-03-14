import Car from './Car';

const ToyCar = function(name){
    this.name=name;
}

ToyCar.prototype = Object.create(Car.prototype)  //{__proto__ : Car.prototype};
ToyCar.prototype.constructor = ToyCar;
ToyCar.prototype.getName = function() {
    return this.getName;
}

export default ToyCar;