// Criar uma função para saber se um número é primo ou composto.	

function primo_ou_composto (number) {
    if(number === 1){
        return "O número 1 não é primo e nem composto!";
    }

    for(let i = 2; i < 100; i++) {{
        if(i === number){
            continue;
        } 
        
        if(number % i === 0){
            return "O número " + number + " é composto!";
        }
    }

        return "O número " + number + " é primo!";
    }
}

console.log(primo_ou_composto(1));
console.log(primo_ou_composto(2));
console.log(primo_ou_composto(3));
console.log(primo_ou_composto(4));
console.log(primo_ou_composto(5));
console.log(primo_ou_composto(6));
console.log(primo_ou_composto(7));
console.log(primo_ou_composto(8));
console.log(primo_ou_composto(9));
console.log(primo_ou_composto(10));
console.log(primo_ou_composto(11));
console.log(primo_ou_composto(13));
console.log(primo_ou_composto(17));
console.log(primo_ou_composto(19));
console.log(primo_ou_composto(23));
console.log(primo_ou_composto(29));
console.log(primo_ou_composto(31));
console.log(primo_ou_composto(37));
console.log(primo_ou_composto(41));
