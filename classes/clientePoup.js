
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

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoup){
        super(nome, cpf, email, saldo);
        this.saldoPoup = saldoPoup;
    }

    depositarPoupanca(valor){
        this.saldoPoup += valor;
    }   
}

const jucimar = new ClientePoupanca('Jucimarl', 'jucimar@email.com', '45645645641', 150, 200);

console.log(jucimar);

jucimar.depositar(52);
jucimar.depositarPoupanca(500);

console.log(jucimar);