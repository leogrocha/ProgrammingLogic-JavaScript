var alvo = '11a22b33c';
// var exp = new RegExp('(\\d\\d(\\w))', 'g');
var exp = /(\d\d(\w))/g;
while (resultado = exp.exec(alvo)) {
    console.log(resultado);
    console.log(exp.lastIndex);
}


// console.log(exp.test(alvo));