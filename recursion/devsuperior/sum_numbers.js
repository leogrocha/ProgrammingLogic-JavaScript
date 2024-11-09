/* 
    Faça uma função que, dado um núermo natural N, retorne a soma dos números de 0 até N.
*/

const sumNumber = (num) => {
    if (num===0){
        return 0;
    }

    return num + (sumNumber(num-1));
}

console.log(sumNumber(2));
console.log(sumNumber(4));
console.log(sumNumber(1));