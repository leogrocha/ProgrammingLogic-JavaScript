const setCprf = {
    nota: 1,
    observacao: 'teste',
    idpessoa: 11075
}

const notasFiscais = [];
notasFiscais.push({
    nota_fiscal: 1,
    data_emissao: '1998-03-18',
    valor: 10.20
})
notasFiscais.push({
    nota_fiscal: 2,
    data_emissao: '1998-03-18',
    valor: 20.30
})


for (let i = 0; i < notasFiscais.length; i++) {
    // Object.assign(setCprf, {
    //     [nota_fiscal]: notasFiscais[i].nota_fiscal,
    //     [data_emissao]: notasFiscais[i].data_emissao,
    //     [valor]: notasFiscais[i].valor,
    // })
    nota_fiscal = 'nota_fiscal_';
    data_emissao = 'data_emissao_';
    valor = 'valor_';

    setCprf[nota_fiscal + i] = notasFiscais[i].nota_fiscal
    setCprf[data_emissao + i] = notasFiscais[i].data_emissao;
    setCprf[valor + i] = notasFiscais[i].valor;
}

console.log(setCprf);