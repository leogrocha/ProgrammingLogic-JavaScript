const cnpj = "1234";
const quantidade_digitos_cnpj = 14;
const cnpj_com_zeros_esquerda = cnpj.padStart(quantidade_digitos_cnpj, "0");
console.log(cnpj_com_zeros_esquerda);


