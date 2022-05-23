// função para poder pegar a data de hoje e diminuir 7 dias
function diminuir_7Dias(data) {
    var data = new Date(data);
    data.setDate(data.getDate() - 7);
    return data;
}

console.log(diminuir_7Dias("2020-05-23"));

console.log(diminuir_7Dias("2020-05-23"));

// função para podermos pegar a data de hoje e diminuir 7 dias formatando a data
function diminuir_7Dias_formatado(data) {
    var data = new Date(data);
    data.setDate(data.getDate() - 7);
    return data.toLocaleDateString();
}

console.log(diminuir_7Dias_formatado("2022-05-23"));
