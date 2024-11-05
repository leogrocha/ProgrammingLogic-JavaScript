const hasLetter = (password) => {

    for (let index = 0; index < password.length; index++) {

        let containsLetter = (password[index] >= 'a' && password[index] <= 'z')
            || (password[index] >= 'A' && password[index] <= 'Z');

        if (containsLetter) {
            return true;
        }
    }

    return false;
}

const hasNumber = (password) => {

    for (let index = 0; index < password.length; index++) {

        let containsNumber = password[index] >= 0 && password[index] <= 9;

        if (containsNumber) {
            return true;
        }
    }

    return false;
}

const hasSpecialCaracter = (password) => {

    for (let index = 0; index < password.length; index++) {

        let containsSpecialCaracter = password[index] === "@" 
            || password[index] === "#" || password[index] === "&";

        if (containsSpecialCaracter) {
            return true;
        }
    }

    return false;
}

function validatePassword2(str) {
    const regex1 = /.{8,}/;
    const regex2 = /[a-zA-Z]/;
    const regex3 = /\d/;
    const regex4 = /[@$#]/;
    return regex1.test(str) && regex2.test(str) && regex3.test(str) && regex4.test(str);
}


const validatePassword = (password) => {

    if (password.length < 8) {
        return false;
    }

    if (!hasLetter(password)) {
        return false;
    }

    if(!hasNumber(password)) {
        return false;
    }

    if(!hasSpecialCaracter(password)) {
        return false;
    }

    return true;
}

const validatePasswordManual = (password) => {
    const quantityCaracteresIsValid = password.length >= 8;
    
    const specialCaracters = [ '@', '#', '&'];
    let hasSpecialCaracter = false

    for (let caracter of specialCaracters) {
        if (password.includes(caracter)) {
            hasSpecialCaracter = true;
        }
    }

    let containsUpperCase = false;
    let containsLowerCase = false;
    let containsNumber = false;
    for (let index = 0; index < password.length; index++) {
        codigoAscii = password.charCodeAt(index);
    
        if (codigoAscii >= 65 && codigoAscii <= 90) {
            containsUpperCase = true;
        }

        if (codigoAscii >= 97 && codigoAscii <= 122) {
            containsLowerCase = true;
        }

        if (codigoAscii >= 48 && codigoAscii <= 57) {
            containsNumber = true;
        }
    }

    const passwordIsValid = containsUpperCase && containsLowerCase;
    

    if (!passwordIsValid) {

        let responseError = ['Senha Inválida: '];

        if(!quantityCaracteresIsValid) {
            responseError.push(`\nSenha deve possuir pelo menos 8 dígitos.`);
        }

        if (!containsUpperCase) {
            responseError.push(`\nSenha deve possuir pelo menos 1 letra maiscula.`);
        } 

        if (!containsLowerCase) {
            responseError.push(`\nSenha deve possuir pelo menos 1 letra minuscula.`);
        } 
        
        if (!containsNumber) {
            responseError.push(`\nSenha deve possuir pelo menos 1 número.`);
        } 
        
        if (!hasSpecialCaracter) {
            responseError.push(`\nSenha deve possuir pelo menos 1 caractere especial como (@, #, &).`);
        }

        return responseError.join("");
    }

    return `Senha válida`;
}

const password = "@A12345678"

console.log(validatePasswordManual(password))
console.log(validatePassword(password))


