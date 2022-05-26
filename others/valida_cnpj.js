
function valida_cnpj(cnpj) {

    const validacao_digitos_1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const validacao_digitos_2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    
    if (cnpj.length != 14) {
        return false;
    } else {
        // Verifica o primeiro dígito verificador
        let sum_digito_1 = 0;
        let resto_digito_1 = 0;
        for (let i = 0; i < cnpj.length - 2; i++) {
            sum_digito_1 += cnpj[i] * validacao_digitos_1[i];
            // console.log(`${cnpj[i]} * ${validacao_digitos_1[i]} = ${cnpj[i] * validacao_digitos_1[i]}`);
        }

        resto_digito_1 = sum_digito_1 % 11;
        if (resto_digito_1 < 2) {
            resto_digito_1 = 0;
        } else {
            resto_digito_1 = 11 - resto_digito_1;
        }

        // Verifica o segundo dígito verificador
        let sum_digito_2 = 0;
        let resto_digito_2 = 0;
        for(let j = 0; j < cnpj.length - 1; j++) {
            sum_digito_2 += cnpj[j] * validacao_digitos_2[j];
        }

        resto_digito_2 = sum_digito_2 % 11;
        if(resto_digito_2 < 2){
            resto_digito_2 = 0;
        } else{
            resto_digito_2 = 11 - resto_digito_2;
        }

        if(cnpj[12] == resto_digito_1 && cnpj[13] == resto_digito_2){
            return true;
        } else {
            return false;
        }

    }

}

console.log(valida_cnpj("11222333000181")); // true
console.log(valida_cnpj("11222333000183")); // false
// valida_cnpj("11222333000181");
console.log(valida_cnpj("34536749000170")); // true
console.log(valida_cnpj("13905933000170")); // true
console.log(valida_cnpj("13905933000175")); // false
