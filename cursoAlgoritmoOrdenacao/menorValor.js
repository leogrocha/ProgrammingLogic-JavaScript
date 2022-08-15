const livros = require('./listaLivros');

// let atual = 0;
// let maisBarato = precosLivros[0];

// for(let i = 0; i < precosLivros.length; i++){
//     if(precosLivros[i] < maisBarato){
//         maisBarato = precosLivros[i];
//     }
// }
// console.log(maisBarato);

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual;
        }
    }

    return maisBarato;
}


module.exports = menorValor;