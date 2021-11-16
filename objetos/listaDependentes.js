const cliente = {
    nome:'Maria',
    idade:'25',
    cpf:'232323123-00',
    email:'maria@email.com',
    fones:['5594342344', '2343454534'],
    dependentes: [{
        nome:'Sara',
        parentesco:'filha',
        dataNasc:'20/09/2011'
    }]
}

cliente.dependentes.push({
    nome:"Sâmia Silva",
    parentesco:'filha',
    dataNasc:'15/10/2014'
});

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '15/10/2014');

console.log(filhaMaisNova[0].nome);