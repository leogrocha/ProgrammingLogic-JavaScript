export class Endereco {
    id_endereco
    idpessoa
    logradouro
    bairro
    numero
    cep
    complemento
    municipio
    estado

    constructor(id_endereco, idpessoa, logradouro, bairro, numero, cep, complemento, municipio, estado) {
        this.id_endereco = id_endereco;
        this.idpessoa = idpessoa;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.numero = numero;
        this.cep = cep;
        this.complemento = complemento;
        this.municipio = municipio;
        this.estado = estado;
    }
}