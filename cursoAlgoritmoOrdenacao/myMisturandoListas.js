const editoraFolha = [
    {nome: 'PHP', preco: 15},
    {nome: 'JavaScript', preco: 25},
    {nome: 'Java', preco: 30},
    {nome: 'Go', preco: 45},
    {nome: 'Elixir', preco: 50},
]

const editoraGalho = [
    {nome: 'Python', preco: 20},
    {nome: 'Rust', preco: 22},
    {nome: 'Ruby', preco: 28},
    {nome: 'C#', preco: 33},
    {nome: 'C++', preco: 35},
    {nome: 'Scala', preco: 40},
]

/*
    Criar um algoritmo para poder misturar as duas listas
    1. Verificar o elemento de ambas as listas e o menor será enviado primeiro
*/

function misturandoListas(lista1, lista2) {
    let array = [];
    let contadorLista1 = 0;
    let contadorLista2 = 0;
    let percorreuTodosOsElementos = false;
    var elementoLista1 = 0;
    var elementoLista2 = 0;

    while (percorreuTodosOsElementos == false) {
        if(contadorLista1 < lista1.length){
            elementoLista1 = lista1[contadorLista1].preco;
        }
        else {
            percorreuTodosOsElementos = true;    
        }

        if(contadorLista2 < lista2.length){
            elementoLista2 = lista2[contadorLista2].preco;
        }
        else {
            percorreuTodosOsElementos = true;    
        }

        if(contadorLista1 < lista1.length && contadorLista2 < lista2.length){
            if(elementoLista1 < elementoLista2){
                array.push(lista1[contadorLista1]);
                contadorLista1++;
            } else if (elementoLista2 < elementoLista1){
                array.push(lista2[contadorLista2]);
                contadorLista2++;
            }
        } else {
            percorreuTodosOsElementos = true;
        }
    }

    if(contadorLista1 == lista1.length){
        let count = contadorLista2 + 1;

        for(let i = count; i <= lista2.length; i++){
            array.push(lista2[count]);
        }
    }

    if(contadorLista2 == lista2.length){
        let count = contadorLista1;

        for(let i = count; i < lista1.length; i++){
            array.push(lista1[count]);
            count++;
        }
    }

    //return lista2[6].preco;
    return array;
}

//misturandoListas(editoraFolha, editoraGalho);
console.log(misturandoListas(editoraFolha, editoraGalho));