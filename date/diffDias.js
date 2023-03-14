function verificarData(data) {
    // Define a data atual sem a hora
    var dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0);

    // Obtém a data recebida em milissegundos
    var dataRecebida = new Date(data).getTime();

    // Define o tempo máximo de diferença (3 dias em milissegundos)
    var maxDiferenca = 3 * 24 * 60 * 60 * 1000;

    // Calcula a diferença em milissegundos entre as duas datas
    var diferenca = dataAtual.getTime() - dataRecebida;

    // Verifica se a diferença é maior ou igual ao tempo máximo
    if (diferenca >= maxDiferenca) {
        return true;
    } else {
        return false;
    }
}

// Exemplo de uso:
var dataRecebida = '2023-03-11'; // data a ser verificada
var resultado = verificarData(dataRecebida); // chama a função
if (resultado) {
    console.log('A data é maior ou igual a 3 dias antes da data atual.');
} else {
    console.log('A data não é maior ou igual a 3 dias antes da data atual.');
}