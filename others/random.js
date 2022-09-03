const qtdeElementos = 30;
const min = 1;
const max = 30;

function gerarNumerosAleatorios(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

function arrayComNumerosCriados() {
    let elements = new Set();

    while(elements.size != qtdeElementos) {
        for(let i = 0; i < qtdeElementos; i++){
            elements.add(gerarNumerosAleatorios(min, max));
        }   
    }

    return [...elements];
}


console.log(arrayComNumerosCriados());
