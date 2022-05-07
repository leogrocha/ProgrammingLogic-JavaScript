const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

numbers.push(10);
console.log(numbers); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,10]
console.log(numbers.lastIndexOf(10)); //15
console.log(numbers.lastIndexOf(100)); //-1