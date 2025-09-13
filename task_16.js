Array.prototype.square = function() {
  return this.map(x => x ** 2);
};
Array.prototype.cube = function() {
  return this.map(x => x ** 3);
};
Array.prototype.sum = function() {
  return this.reduce((acc, val) => acc + val, 0);
};
Array.prototype.average = function() {
  return this.length === 0 ? NaN : this.sum() / this.length;
};
Array.prototype.even = function() {
  return this.filter(x => x % 2 === 0);
};
Array.prototype.odd = function() {
  return this.filter(x => x % 2 !== 0);
};