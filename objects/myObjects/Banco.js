class Nubank {
    constructor(id, nome, saldo){
        this.id = id;
        this.nome = nome;
        this.saldo = saldo;
    }

    deposito(valor) {
        return this.saldo += valor;
    }

    saque(valor) {
        this.saldo - valor < 0 ? this.saldo : this.saldo -= valor;
    }
}

const nubank = new Nubank(1, 'Seu Madruga', 5000);

console.log(nubank);

nubank.deposito(1000);
console.log(nubank);
nubank.saque(2000);
console.log(nubank);
nubank.saque(1000);
console.log(nubank);
nubank.deposito(2000);
console.log(nubank);

