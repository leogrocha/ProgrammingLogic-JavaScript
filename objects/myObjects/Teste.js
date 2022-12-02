class Funcionario {
    id;
    nome;
    salario;
    departamento;

    aumentoSalario(valor) {
        this.salario += valor;
    }
}

const funcionario = new Funcionario();
funcionario.id = 1;
funcionario.nome = 'Seu Madruga';
funcionario.salario = 5000.00;
funcionario.departamento = 'Development';
console.log(funcionario);
funcionario.aumentoSalario(1000);
console.log(funcionario);