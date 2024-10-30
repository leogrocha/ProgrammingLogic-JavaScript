const valor = 50;
const porcentagem = 30;

const valorJuros = valor * (porcentagem/100);
const acrescimoJuros = valor * (1 + (porcentagem/100));
const valorDescontado = valor - valorJuros;

console.log(`Acrescimo Juros: R$${acrescimoJuros.toFixed(2)}`);
console.log(`Valor descontado: R$${valorDescontado.toFixed(2)}`);
console.log(`Valor juros: R$${valorJuros.toFixed(2)}`);