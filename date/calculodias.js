function diminuir_Dias(data, day) {
    var data = new Date(data);
    data.setDate(data.getDate() - day);
    return data;
}

console.log(diminuir_Dias("2020-05-23", 7));

console.log(diminuir_Dias("2020-05-23", 7));

function diminuir_Dias_formatado(data, day) {
    var data = new Date(data);
    data.setDate(data.getDate() - day);
    return data.toLocaleDateString();
}

console.log(diminuir_Dias_formatado("2022-05-23", 7));
