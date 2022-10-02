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
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro) {
            throw Error('CEP não existe!')
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endeereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEP.logradouro;
        estado.value = consultaCEP.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro);
        mensagemErro.innerHTML = '<p> CEP inválido. Tente novamente</p>';
    }
}
 

//PromisseAll
// let ceps = ['01001000', '01001001', '37950000']
// let conjuntosCep = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntosCep).then(respostas => console.log(respostas));

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));

