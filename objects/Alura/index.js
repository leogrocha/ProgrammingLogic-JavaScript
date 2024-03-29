import { Cliente } from "./Cliente.js";
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha('123456');
const gerente = new Gerente("Ricardo", 5000, 12345678912);
gerente.cadastrarSenha('123');

const cliente = new Cliente('Lais', 78945612379, '465');
const gerenteLogado = SistemaAutenticacao.login(gerente, '123');
const diretorLogado = SistemaAutenticacao.login(diretor, '123456');

const clienteLogado = SistemaAutenticacao.login(cliente, '456');

console.log(clienteLogado);
console.log(gerenteLogado);
console.log(diretorLogado);



