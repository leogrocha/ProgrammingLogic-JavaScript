// mmc - dois numeros

function mmc(number1, number2) {
    let status = false;
    let contador = 1;
    let result = 0;

    while(status === false){
        let contador_number2 = number2 * contador;
        if(contador_number2 % number1 === 0){
            result = number2 * contador;
            status = true;
        }

        contador++;
    }

    return result;
}

console.log(mmc(8,6));

/*
    8 6 - 2
    4 3 - 2
    2 3 - 2
    1 3 - 3
    1 1

    total = 24
*/ 