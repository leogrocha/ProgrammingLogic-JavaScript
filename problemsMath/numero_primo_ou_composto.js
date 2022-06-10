// Criar uma função para saber se um número é primo ou composto.	

function primo_ou_composto (number) {
    if(number === 1){
        return "O número 1 não é primo e nem composto!";
    }

    for(let i = 2; i < 1000; i++) {
        if(i === number){
            continue;
        } 
        
        if(number % i === 0){
            return "O número " + number + " é composto!" + " O número " + number + " é divisível por " + i;
        }
    }
    return "O número " + number + " é primo!";
}

console.log(primo_ou_composto(39));
console.log(primo_ou_composto(41));
console.log(primo_ou_composto(57));
console.log(primo_ou_composto(73));
console.log(primo_ou_composto(91));
console.log(primo_ou_composto(143));

console.log(primo_ou_composto(1));
