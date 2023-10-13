

// contar quantos gerados foram selecionados indo de um por um e caso tenham dois seguidos pular diretamente para o segundo.
const stepClouds = [0,1,0,1,0,0,1];
var quantitySteps = 0;
var index = 0;

while(index != stepClouds.length) {
    let item = stepClouds[index];
    let keep = item === 1;
    let nextOneCloud = item === 0 && stepClouds[index+1] === 1;
    let nextTwoClouds = item === 0 && stepClouds[index+1] === 0;

    if(keep) {
        index++;
        continue;
    } else if(nextOneCloud) {
        quantitySteps++;
        index++;
    } else if (nextTwoClouds) {
        quantitySteps++;
        index += 2;
    }
}

console.log(quantitySteps);


