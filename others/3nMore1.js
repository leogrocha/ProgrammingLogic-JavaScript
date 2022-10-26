function qtdeInteractions(n) {
    let interactions = n;
    let qtde = 1;

    while(interactions != 1) {

        if(interactions % 2 !== 0){
            interactions = (3 * interactions) + 1;
        } else {
            interactions = interactions / 2;
        }
        
        qtde++;
    }

    return qtde;
}

let inicio = 999000;
let fim = 999999;
// let inicio = 1;
// let fim = 10;
let bigger = 0;

for(let i = inicio; i <= fim; i++) {
    if(qtdeInteractions(i) > bigger) {
        bigger = qtdeInteractions(i);
    }
}

console.log(bigger);


