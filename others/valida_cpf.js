function valida_cpf(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {
        // Verificando o primeiro dígito verificador
        let sum_digito_1 = 0;
        let resto_digito_1 = 0;
        for (let i = 0; i < cpf.length - 2; i++) {
            sum_digito_1 += cpf[i] * (i + 1);
        }

        resto_digito_1 = sum_digito_1 % 11;
        // console.log(`Resto divisao 1: ${resto_digito_1}`);
        // console.log(`Sum digito 1: ${sum_digito_1}`);

        // Verificando o segundo dígito verificador
        let sum_digito_2 = 0;
        let resto_digito_2 = 0;
        for (let j = 0; j < cpf.length - 1; j++) {
            sum_digito_2 += cpf[j] * j;
        }

        resto_digito_2 = sum_digito_2 % 11;
        // console.log(`Resto divisao 2: ${resto_digito_2}`);
        // console.log(`Sum digito 2: ${sum_digito_2}`);

        if (cpf[9] == resto_digito_1 && cpf[10] == resto_digito_2) {
            return true;
        }

        return false;
    }

}

console.log(valida_cpf("13569486699"));
// valida_cpf("13569486699");
console.log(valida_cpf("18823303079"));
console.log(valida_cpf("12312377756"));
console.log(valida_cpf("15412377756")); // false