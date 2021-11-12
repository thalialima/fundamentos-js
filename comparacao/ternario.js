// operador ternário

const idadeMinima = 18;
const idadeCliente = 19;

// if clássico
if(idadeCliente >= idadeMinima){
        console.log('Pode trazer o goró');
}else{
        console.log('Não pode beber');
}

//com o ternário
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");

// não é recomendado colocar um ternário dentro de outro

// CONDIÇÃO ? SAÍDA CASO SEJA TRUE : SAÍDA CASO SEJA FALSE