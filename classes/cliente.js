
class Cliente{
    //método construtor
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    //comportamentos
    depositar(valor){
        this.saldo += valor;
    }

    exibeSaldo(){
        console.log(this.saldo);
    }

}

const maria = new Cliente('Maria', 'maria@email.com', '45645645612', 100);

console.log(maria);

maria.exibeSaldo();