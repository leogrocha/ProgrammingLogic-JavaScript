let mySet = new Set();
mySet.add('foo');

console.log(mySet.delete('bar')); // false
console.log(mySet.delete('foo')); // true