const cliente = {
    nome:'Maria',
    idade:'25',
    cpf:'232323123-00',
    email:'maria@email.com'
}
console.log(cliente);

//adiciona um campo novo no objeto
cliente.fone = "98987372653";
console.log(cliente);

//substituindo o valor
cliente.fone = "89989898787";

//apagando o valor, retorna um boolean
delete cliente.email;

console.log(cliente);