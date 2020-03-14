import Machine from './Machine';

const Car = function(color) {
    this.color=color;
}
Car.prototype =  Object.create(Machine.prototype) //{__proto__ : Machine.prototype};
Car.prototype.getColor = function() {
    return this.color;
}

export default Car;