const validatePassword = (password) => {
    const quantityCaracteres = password.length >= 8;
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

    const passwordIsValid = quantityCaracteres && hasSpecialCaracter && containsUpperCase && containsLowerCase;
    

    if (!passwordIsValid) {

        let responseError = 'Senha inválida: ';

        if(!quantityCaracteres) {
            responseError += `\nSenha deve possuir pelo menos 8 dígitos.`
        }

        if (!containsUpperCase) {
            responseError += `\nSenha deve possuir pelo menos 1 letra maiscula.`
        } 

        if (!containsLowerCase) {
            responseError += `\nSenha deve possuir pelo menos 1 letra minuscula.`
        } 
        
        if (!containsNumber) {
            responseError += `\nSenha deve possuir pelo menos 1 número.`
        } 
        
        if (!hasSpecialCaracter) {
            responseError += `\nSenha deve possuir pelo menos 1 caractere especial como (@, #, &).`
        }

        return responseError
    }

    return `Senha válida`;
}

const password = "a@A12345678"

console.log(validatePassword(password))


