// 01001250 CEP NÃO EXISTE


// var consultaCEP = fetch('https://viacep.com.br/ws/37950000/json')
// .then(resposta => resposta.json()
// .then(r => {
//     if(r.erro) {
//         throw Error('Esse cep não existe!')
//     } else {
//         console.log(r);
//     }
// }))
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluído'));


// console.log(consultaCEP);

async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro) {
            throw Error('CEP não existe!')
        }

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro);
    }
}


//PromisseAll
let ceps = ['01001000', '01001001', '37950000']
let conjuntosCep = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntosCep).then(respostas => console.log(respostas));

