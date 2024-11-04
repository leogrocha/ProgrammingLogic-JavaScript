/*
    Dado o CPF de uma pessoa, o qual pode conter pontos ou traços como separadores, 
    retorne o CPF contendo somente dígitos.
 */

const removeNonDigitsWithReplaceAll = (document) => {
    return document.replaceAll(".", "").replaceAll("-", "");
}

const removeNonDigits = (document) => {
    const regex = /\D/g;
    return document.replace(regex, "");
}

const removeNonDigitsString = (document) => {
    let s = "";

    for (let i = 0; i < document.length; i++) {        
        if (document[i] >= '0' && document[i] <= '9') {
            s = s + document[i];
        }
    }

    return s;
}

const removeNonDigitsArray = (document) => {
    let charArray = [];

    for (let i = 0; i < document.length; i++) {        
        if (document[i] >= '0' && document[i] <= '9') {
            charArray.push(document[i]);
        }
    }

    return charArray.join("");
}

const cpf = '123.123.777-56'

console.log(removeNonDigitsWithReplaceAll(cpf));

console.log(removeNonDigits(cpf));

console.log(removeNonDigits('87409217293'));
console.log(removeNonDigits('874092172-93'));
console.log(removeNonDigits('874.092.172-93'));
    
console.log(removeNonDigitsString('874.092.172-93'));
console.log(removeNonDigitsArray('874.092.172-93'));