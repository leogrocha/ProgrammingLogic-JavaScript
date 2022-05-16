// Neste desafio você deverá construir uma função que
// recebe uma string e identifique se a mesma é uma palindrome, 
// ou seja, se a string é igual a ela mesma invertida.

function solution(string) {
    let pointer_1 = 0;
    let pointer_2 = string.length - 1;
    let palindrome = true;

    for(pointer_1 = 0, pointer_2 = string.length - 1; pointer_1 < pointer_2; pointer_1++, pointer_2--){
        if(string[pointer_1] === string[pointer_2]){
            palindrome = true;
        } else {
            palindrome = false;
            break;
        }
    }

    return palindrome;
}

console.log(solution('banana')); // false
console.log(solution('asa')); // true


