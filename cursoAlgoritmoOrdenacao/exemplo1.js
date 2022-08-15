const livros = require('./listaLivros');

// let atual = 0;
// let maisBarato = precosLivros[0];

// for(let i = 0; i < precosLivros.length; i++){
//     if(precosLivros[i] < maisBarato){
//         maisBarato = precosLivros[i];
//     }
// }
// console.log(maisBarato);

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual;
    }
}

console.log(`O livro mais barato custa R$ ${livros[maisBarato].preco.toFixed(2)} e o título é ${livros[maisBarato].titulo}`);