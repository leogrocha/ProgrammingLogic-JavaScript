let mapa = new Map();
// ADICIONAR NOVOS ITENS NO MAP - SET
mapa.set("nome", "Leonardo");
mapa.set("idade", 26);

// OBTER UM VALOR DO MAP - GET
const nome = mapa.get("nome");
console.log(`Nome: ${nome}`);

// DELETAR UM ITEM DO MAP - DELETE
mapa.delete("idade");
console.log(mapa);

// VALIDAR SE EXISTE CHAVE NO MAP - HAS
const possuiCampoNome = mapa.has("nome");
const possuiCampoIdade = mapa.has("idade");
console.log(`POSSUI CAMPO NOME: ${possuiCampoNome}`);
console.log(`POSSUI CAMPO IDADE: ${possuiCampoIdade}`);

// VERIFICAR QUANTIDADE DE DIGITOS NO MAP - SIZE
console.log(`QUANTIDADE DE ITENS NO MAPA: ${mapa.size}`);

// MOSTRAR CHAVES DO MAP - KEYS
for(let key of mapa.keys()) {
    console.log(`CHAVE DO MAPA: ${key}`);
}

// LIMPANDO AS INFORMAÇÕES DO MAP - CLEAR
// mapa.clear();
// console.log(mapa);

// MOSTRAR ITENS DO MAP - VALUES
for(let item of mapa.values()) {
    console.log(`ITEM DO MAPA: ${item}`);
}

// MOSTRAR CHAVE E VALOR DO MAP - ENTRIES
for (let itemValue of mapa.entries()) {
    console.log(`CHAVE E VALOR DO MAPA: ${itemValue}`);
}

// CRIANDO UMA FUNÇÃO CALLBACK DE ACORDO COM O MAP - FOREACH
let text = "";
mapa.forEach(function(value, key) {
    text += `${key} = ${value} `
})

console.log(`MAPS CONCAT: ${text}`);

// PEGAR UM EXEMPLO DO GROUP BY

