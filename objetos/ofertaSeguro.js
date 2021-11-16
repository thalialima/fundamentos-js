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
    },
    {
        nome:"Sâmia Silva",
        parentesco:'filha',
        dataNasc:'15/10/2014'
    }],
    saldo:100,
    depositar: function (valor){
        this.saldo += valor;
    }
}

for(let info in cliente){
    if(info === 'dependentes'){
        console.log('Você gostaria de obter a nossa oferta de seguro?')
    }
}

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    console.log(propsClientes);
    if(propsClientes.includes('dependentes')){
        console.log(`Oferta enviada para ${obj.nome}`)
    }
}
console.log('****Values******');
console.log(Object.values(cliente));
console.log('****Entries******');
console.log(Object.entries(cliente));
oferecerSeguro(cliente);