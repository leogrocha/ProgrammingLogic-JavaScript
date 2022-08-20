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

const objetosConcatenado = editoraFolha.concat(editoraGalho);

function compare (a, b) {
    if(a.preco < b.preco)
        return -1;
    if(a.preco > b.preco)
        return 1;
     
    return 0;    
}

console.log(objetosConcatenado.sort(compare));