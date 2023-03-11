import { Endereco } from './endereco.js';

export class Pessoa {
    id
    nome
    cpf
    email
    data_nascimento
    telefone


    constructor(id, nome, cpf, email, data_nascimento, telefone) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.telefone = telefone;
        this.endereco = new Endereco();
    }
}


