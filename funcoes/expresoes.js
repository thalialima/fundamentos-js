//***declaração de função

function minhaFuncao(param){
        //bloco de código
}

minhaFuncao('param');

//****expressão de função (função anônima)
//aqui é importante ser const
//fazer tudo em uma linha só
//dessa forma a função não pode ser chamada antes da sua declaração
const soma = function(num1, num2){ return num1 + num2 }

console.log(soma(1, 2));

//diferença principal
console.log(apresentar());

//funções declaradas e var são içadas HOISTING
//são iniciadas antes da execução do código
function apresentar(){
        return 'Olá';
}

//isso não acontece com a expressão de função
