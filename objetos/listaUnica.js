const clientes = [
    {
        nome:'Maria',
        idade:'45',
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
        }]
    },

    {
        nome:'Pedro',
        idade:'29',
        cpf:'232323123-00',
        email:'pedro@email.com',
        fones:['5594342344', '2343454534'],
        dependentes: [{
            nome:'Juliana',
            parentesco:'filha',
            dataNasc:'10/09/2015'
        }]
    }
]
//spread operator(copia as propriedades de objetos para outros)
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.log(listaDependentes);
console.table(listaDependentes);
