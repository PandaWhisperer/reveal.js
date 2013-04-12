var Car = function(name) {
  this.name = name;
}

Car.prototype.drive = function() {
  console.log(this.name + " goes vroom!");
}

module.exports = Car; // export the constructor

