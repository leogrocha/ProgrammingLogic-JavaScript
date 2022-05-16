// Se o array é [4, 1, 2, -2, 11, 15, 1, -1, -6, -4] e o target é 9. Neste caso, seu programa deve retornar:

// [-2, 11]

// O motivo é bastante simples:

// -2 + 11 = 9

const numbers = [4,1,2,-2,11,15,1,-1,-6,-4];
const target_sum = 9;

// Resposta utilizando on2
// function solution(numbers, target_sum){
//     for(let i = 0; i < numbers.length -1; i++){
//         let first = numbers[i];
//         for(let j = i+1; j < numbers.length; j++){
//             let second = numbers[j];
//             if(first + second === target_sum){
//                 return [first, second];
//             }
//         }       
//     }
// }

// console.log(solution(numbers, target_sum));

// Resposta utilizando o(n)
function solution(numbers, target_sum){
    let result = [];

    for(let i = 0; i < numbers.length-1; i++){
        //console.log(`${numbers[i]} - ${numbers[i+1]}`);
        if(numbers[i] + numbers[i+1] === target_sum){
            result.push(numbers[i], numbers[i+1]);
        }
    }

    return result;

}

console.log(solution(numbers, target_sum));
//solution(numbers, target_sum);
    


