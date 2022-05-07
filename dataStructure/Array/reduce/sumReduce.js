const array = [10,20,30,40,50];

const sum = array.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

console.log(sum);