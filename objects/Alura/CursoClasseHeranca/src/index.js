import {Personagem} from './modules/personagem.js'
import {PersonagemView} from './components/personagem-view.js';

// const personagemPedrinho = {
//     nome: 'Pedrinho',
//     vida: 7,
//     mana: 12,
//     level: 5,
//     tipo: 'Mago',
// }

// const personagemJose = {
//     nome: 'Jose',
//     vida: 7,
//     mana: 6,
//     level: 3,
//     tipo: 'Arqueiro',
// }

// const personagemPedrinho = new Personagem();
// personagemPedrinho.nome = "Pedrinho";
// personagemPedrinho.vida = 7;
// personagemPedrinho.mana = 12;
// personagemPedrinho.level = 5;
// personagemPedrinho.tipo = 'Mago';

// const personagemJose = new Personagem();
// personagemJose.nome = "Jose";
// personagemJose.vida = 7;
// personagemJose.mana = 12;
// personagemJose.level = 5;
// personagemJose.tipo = 'Arqueiro';

// console.log(`Insignia de ${personagemPedrinho.nome} : ${personagemPedrinho.obterInsignia()}`);
// console.log(`Insignia de ${personagemJose.nome} : ${personagemJose.obterInsignia()}`);

const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago');
const personagemJose = new Personagem('José', 3, 'Arqueiro');

const personagens = [personagemPedrinho, personagemJose];
new PersonagemView(personagens).render();
