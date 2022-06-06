function sortear_numeros() {
    let nums = [];
    let min = Math.ceil(1);
    let max = Math.floor(60);

    for (let i = 0; i < 6; i++) {
        nums.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return nums.sort((a,b) => a - b);
}

function resultado_mega_sena() {
    
    let nums = [];
    do {
        let elements = new Set();
        let numeros_sorteados = sortear_numeros();
        nums = [];
        for(let i = 0; i < 6; i++) {
            elements.add(numeros_sorteados[i]);
        }

        nums = [...elements];    

    } while(nums.length !== 6);

    console.log(nums);
}

resultado_mega_sena();