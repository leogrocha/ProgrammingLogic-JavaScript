const quantidadeNumerosSorteados = 5;
const minimo = 1;
const maximo = 80;

function sortearNumeros() {
    let nums = [];
    let min = Math.ceil(minimo);
    let max = Math.floor(maximo);

    while(nums.length !== quantidadeNumerosSorteados) {
        nums.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return nums.sort((a,b) => a - b);
}

function resultadoSorteio() {
    
    let nums = [];
    do {
        let elements = new Set();
        let numeros_sorteados = sortearNumeros();
        nums = [];
        numeros_sorteados.map((value) => elements.add(value));
        nums = [...elements];    

    } while(nums.length !== quantidadeNumerosSorteados);

    console.log(nums);
}

resultadoSorteio();