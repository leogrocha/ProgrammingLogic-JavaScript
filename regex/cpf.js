const cpf = "12345678899";

// regex para formatar o cpf
const cpfMask = cpf.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').
replace(/(\d{3})(\d)/, '$1-$2');

console.log(cpfMask);