const funcionario = {
    id: 1,
    nome: 'Teste'
}

console.log(funcionario);

let array = [];
array.push({
    id: 1,
    nome: 'Léo'
});

Object.assign(funcionario, {
    notas_fiscais: array
})

console.log(funcionario);