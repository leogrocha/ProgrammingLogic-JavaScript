const arrayConstante = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15];
const min = 1;
const max = 30;

function gerarNumerosAleatorios(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

function iniciarJogo() {
    //let new_array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let new_array = [];
    var arrayEspelho = arrayConstante;
    let contador = 0;

    while (contador < 30) {

        let index = arrayEspelho[contador];
        var number = parseInt(gerarNumerosAleatorios(min, max));
        
        if(new_array[number] == undefined) {
            new_array[number] = index;
            contador++;
        } 
    }

    console.log(new_array);
}

iniciarJogo();