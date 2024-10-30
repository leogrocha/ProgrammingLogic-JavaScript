const valor = 50;
const porcentagem = 30;

const acrescimoJuros = valor * (1 + (porcentagem/100));
const valorDescontado = valor - (valor * (porcentagem/100));

console.log(acrescimoJuros);
console.log(valorDescontado);