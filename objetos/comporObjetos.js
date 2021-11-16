const cliente = {
    nome:'Maria',
    idade:'25',
    cpf:'232323123-00',
    email:'maria@email.com',
    fones:['5594342344', '2343454534']
}

cliente.dependente = {
    nome:'Sara',
    parentesco:'filha',
    dataNasc:'20/09/2011'
}

cliente.dependente.nome = "Sara Silva";

console.log(cliente);