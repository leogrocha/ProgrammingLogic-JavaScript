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

const cpf = '123.123.777-56'

console.log(removeNonDigitsWithReplaceAll(cpf));

console.log(removeNonDigits(cpf));

console.log(removeNonDigits('87409217293'));
console.log(removeNonDigits('874092172-93'));
console.log(removeNonDigits('874.092.172-93'));
    