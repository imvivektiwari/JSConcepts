import Machine from './Machine';

const Car = function(size) {
    this.size=size;
}
Car.prototype =  Object.create(Machine.prototype) //{__proto__ : Machine.prototype};
Car.prototype.getColor = function() {
    return this.color;
}
export default Car;