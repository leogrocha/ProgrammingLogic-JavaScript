export class Cliente {
    get cpf(){
        return this._cpf;
    }

    /*
    Exemplo do set em javaScript
    set _cpf(cpf){
        this._cpf = cpf;
    }*/

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
        
    }

    autenticar(){
        return true;
    }
}