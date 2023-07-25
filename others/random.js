const qtdeElementos = 30;
const min = 1;
const max = 30;

const gerarNumerosAleatorios = (min, max) => (Math.random() * (max - min) + min).toFixed(0);
    

function arrayComNumerosCriados() {
    let elements = new Set();

    while(elements.size != qtdeElementos) {
        elements.add(Number(gerarNumerosAleatorios(min, max)));
    }

    return [...elements];
}


console.log(arrayComNumerosCriados());
