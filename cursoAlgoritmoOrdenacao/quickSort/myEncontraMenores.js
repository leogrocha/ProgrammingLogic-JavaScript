const listaLivros = require('./array');

function encontraMenores(array, pivo) {
    let newArray = [];
    var posicaoPivo = 0;
    array.sort(compare);


    for(let i = 0; i < array.length; i++){
        if(array[i].preco === pivo) {
            posicaoPivo = i;
        }
    }

    for(let i = posicaoPivo-1; i > 0; i--){
        newArray.push(array[i]);
    }

    newArray.sort(compare);

    return newArray;
}

function compare(a, b) {
    if(a.preco < b.preco)
        return -1;
    if(a.preco > b.preco)
        return 1;
        
    return 0;    
}

console.log(encontraMenores(listaLivros, 30));
