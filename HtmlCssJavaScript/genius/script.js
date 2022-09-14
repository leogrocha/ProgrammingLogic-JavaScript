// Variáveis globais
let min = 0;
let max = 3;
var array = [];
var arraySorteado = [];
const colors = [
    {id: 0, color: 'blue'},
    {id: 1, color: 'red'},
    {id: 2, color: 'green'},
    {id: 3, color: 'yellow'},
]

function gerarNumerosAleatorios(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

function gerarCoresAleatorias() {
    
}

function selecionarCor() {
    
    //const numeroSorteado = gerarNumerosAleatorios(min,max);
    let contador = 0;
    let acertou = true;


    setTimeout(() => {
        document.getElementById('0').style.backgroundColor = 'lightskyblue';
    }, 2000);

    setTimeout(() => {
        document.getElementById('0').style.backgroundColor = '';
    }, 3000);

    console.log(array);
    
    // while(contador < 5) {

    //     let numeroSorteado = contador;

    //     if(numeroSorteado == 0) {
    //         setTimeout(() => {
    //             document.getElementById('blue').style.backgroundColor = 'lightskyblue';
    //         }, 1000);
    //         document.getElementById('blue').style.backgroundColor = 'white';
    //     } else if(numeroSorteado == 1) {
    //         setTimeout(() => {
    //             document.getElementById('red').style.backgroundColor = 'lightcoral';
    //         }, 1000);
    //         document.getElementById('red').style.backgroundColor = 'white';
    //     } else if(numeroSorteado == 2) {
    //         setTimeout(() => {
    //             document.getElementById('green').style.backgroundColor = 'lightgreen';
    //         }, 1000);
    //         document.getElementById('green').style.backgroundColor = 'white';
    //     } else if(numeroSorteado == 3) {
    //         setTimeout(() => {
    //             document.getElementById('yellow').style.backgroundColor = 'yellow';
    //         }, 1000);
    //         document.getElementById('yellow').style.backgroundColor = 'white';
    //     }

    //     contador++;
    // }

    
}


function selecionandoItem(id) {
    console.log(id);
    array.push(id);
}


