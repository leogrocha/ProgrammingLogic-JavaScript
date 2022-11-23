function formata_celular(numero) {
    var formatado = '';
    numero = onlyNumber(numero);

    formatado = "(" + numero.substr(0, 2) + ") ";
    formatado += numero.substr(2, 5) + "-";
    formatado += numero.substr(7, 4);
    return formatado;
}

function onlyNumber(data) {
        var rule = new RegExp("[^0-9]", "g");
        return data.replace(rule, "");
}

console.log(formata_celular('35988774455')); // (35) 98877-4455