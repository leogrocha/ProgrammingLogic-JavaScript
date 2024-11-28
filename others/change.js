const change = (valor) => {
    let notas = [100,50,20,10,5,2,1];
    let quantidadeNotas = 0;
    let result = [];

    for (let index in notas) {
       let nota = notas[index];
        
       if (valor >= nota) {
           quantidadeNotas = Math.floor(valor/nota);
           valor -= nota * quantidadeNotas
           result.push(`${quantidadeNotas} nota(s) de R$${notas[index].toFixed(2)}`)
       }

    }

    return result.join('\n');
}

console.log(change(271));

