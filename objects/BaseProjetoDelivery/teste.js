import { Pessoa } from './pessoa.js';
import { Endereco } from './endereco.js';

let pessoas = [];

const pessoa = new Pessoa(1, 'Seu Madruga', '123.123.777-56', 'contato@hotmail.com', '1950-01-01', '(35) 98877-4455');
const endereco = new Endereco(1, 1, 'Rua Pimenta de Teste', 'Centro', 10, '37950-000', 'Fundos', 'Ribeirão Preto', 'SP');
pessoa.endereco = endereco;
pessoas.push(pessoa);

const pessoa2 = new Pessoa(1, 'Waltinho', '123.123.777-56', 'contato@hotmail.com', '1950-01-01', '(35) 98877-4455');
const endereco2 = new Endereco(1, 1, 'Rua Pimenta de Teste', 'Centro', 10, '37950-000', 'Fundos', 'Ribeirão Preto', 'SP');
pessoa2.endereco = endereco;
pessoas.push(pessoa2);


console.log(pessoas);