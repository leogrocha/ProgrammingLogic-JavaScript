const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.reverse();
console.log(numbers); //[15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]

numbers.sort();
console.log(numbers); // [1,10,11,12,13,14,15,2,3,4,5,6,7,8,9]

numbers.sort((a, b) => a - b);
console.log(numbers); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const compare = (a, b) => {
    if (a < b)
        return -1;

    if (a > b)
        return 1;
    
    return 0;    
}

numbers.sort(compare);
console.log(numbers); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


