const cpf = '12345678899';

const cpf_formatado = cpf.substring(0, 3) + '.' +
 cpf.substring(3, 6) + '.' + cpf.substring(6, 9) + '-' + cpf.substring(9, 11);

console.log(cpf_formatado);