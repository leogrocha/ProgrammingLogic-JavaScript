// mostrar os divisores de um número
const number = 28;
// var nums = [];

var sum = 0;
for(let index = 1; index < number; index++) {
    if(number % index == 0) {
        sum += index;
    }
}

// const sum = nums.reduce((accumulator, value) => accumulator + value, 0);
// console.log(sum);

// console.log(sum === number ? `${number} eh perfeito` : `${number} nao eh perfeito`);

console.log(sum);
console.log(sum === number ? `${number} eh perfeito` : `${number} nao eh perfeito`);