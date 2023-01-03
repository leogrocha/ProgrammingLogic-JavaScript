class Pessoa {
    id;
    nome;
    documento;
    data_nascimento;
    email;

    constructor(id, nome, documento, data_nascimento,email){
        this.id = id;
        this.nome = nome;
        this.documento = documento;
        this.data_nascimento = data_nascimento;
        this.email = email;
    }
}

const pessoa = new Pessoa(1,'Seu Madruga', '789.456.123-99', '1980-01-01', 'contato@hotmail.com');
const pessoa2 = new Pessoa(2,'Chaves', '154.789.455-88', '1990-01-01', 'contato@hotmail.com');
const pessoa3 = new Pessoa(3,'Quico', '123.789.455-88', '1970-01-01', 'contato@hotmail.com');
const pessoa4 = new Pessoa(4,'Seu Barriga', '456.789.455-88', '1985-01-01', 'contato@hotmail.com');
const arrayObjetos = [];
arrayObjetos.push(pessoa);
arrayObjetos.push(pessoa2);
arrayObjetos.push(pessoa3);
arrayObjetos.push(pessoa4);

arrayObjetos.forEach(pessoa => console.log(pessoa.id));
arrayObjetos.forEach(pessoa => console.log(pessoa.nome));



