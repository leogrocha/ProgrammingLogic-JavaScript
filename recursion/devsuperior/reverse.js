const reverseFor = (lista) => {
    var novaLista = [];

    for (let i = lista.length-1; i >= 0; i--) {
        novaLista.push(lista[i]);
    }

    return novaLista;
}

const reverseMethod = (lista) => {
    return lista.reverse();
}

const reverse = (lista) => {
    if(lista.length<=1){
        return lista;
    }

    const head = lista[0];
    const tail = lista.slice(1);

    return reverse(tail).concat([head]);
}

console.log(reverseFor([1,2,3]));
console.log(reverseMethod([1,2,3]));

console.log(reverse([1,2,3]));