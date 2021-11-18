//função construtora
function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

const juliana = new ClientePoupanca('Juliana', '7897897800', 'ju@gmail.com', 100, 200);

console.log(juliana);

//adicionando novo método na propriedade
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

juliana.depositarPoup(30);

console.log(juliana.saldoPoup);