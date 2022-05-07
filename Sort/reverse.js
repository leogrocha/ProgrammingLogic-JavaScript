const numbers = [10,11,12,13,15,14,1,3,5,2,4,6,8,9,7];

console.log(numbers.reverse());
/*
[
   7,  9,  8,  6,  4,  2,
   5,  3,  1, 14, 15, 13,
  12, 11, 10
]
*/

// Código para poder colocar um array em ordem decrescente

numbers.sort((a,b) => a - b);
numbers.reverse();
console.log(numbers);
/*
[
  15, 14, 13, 12, 11, 10,
   9,  8,  7,  6,  5,  4,
   3,  2,  1
]
*/
