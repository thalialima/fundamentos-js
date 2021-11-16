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

let relatorio = "";

//for in, método específico para objetos
for(let info in cliente){
    if(typeof cliente[info] === 'object' || typeof cliente[info] === 'function'){
        continue;
    }
    relatorio += `${info} - ${cliente[info]}\n`;
}

console.log(relatorio);



