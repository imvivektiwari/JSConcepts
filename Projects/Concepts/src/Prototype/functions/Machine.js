const Machine = function(metalType) {
    this.metalType=metalType;
}
Machine.prototype.getMetalType = function() {
    return this.type;
}

export default Machine;