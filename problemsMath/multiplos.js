/*
    Algoritmo para saber quantos multiplos de n existem entre um número inicial e um número final.
*/

function multiplo(number, inicial, final){
    let nums = [];
    
    for(let i = inicial; i <= final; i++){
        if(i % number === 0){
            nums.push(i);
        }
    }

    return nums;
}

console.log(multiplo(4, 1, 30)); // [4, 8, 12, 16, 20, 24, 28]
console.log(multiplo(6, 1, 70)); // [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66]
console.log(multiplo(7,1,100));
console.log(multiplo(12,1,150));
console.log(multiplo(15,1,175));
console.log(multiplo(16,1,200));
console.log(multiplo(75,1,1000));