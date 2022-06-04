/*
    Um pessoa precisa de juntar R$30.000,00
    1 no primeiro dia do mês ela junta 1 real
    2 no segundo dia ela junta 2 reais
    3 no terceiro dia ela junta 3 reais
    E assim sucessivamente vai duplicando a quantidade
    quantos dias ela vai precisar para juntar R$30.000,00 ?
*/

let objetivo = 30000;
let incremento = 0;
let sum = 0;

while (sum < objetivo) {
  sum = Math.pow(2, incremento);
  incremento++;
}

console.log(incremento-1);