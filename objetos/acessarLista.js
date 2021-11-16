const cliente = {
    nome:'Maria',
    idade:'25',
    cpf:'232323123-00',
    email:'maria@email.com'
}

const chaves =['nome', 'idade','cpf','email'];

console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));

console.log(cliente['conta']);