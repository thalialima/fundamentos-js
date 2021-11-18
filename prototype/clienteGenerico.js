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

//nova instância de cliente
const thalia = new Cliente('Thalia', '12312121200', 'thalia@email.com', 100);

console.log(thalia);