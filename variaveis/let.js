// let

let forma = 'retângulo'

let altura = 5;
let comprimento = 7;


if(forma === 'retângulo'){
        area = altura * comprimento;
}else{
        area = (altura * comprimento) / 2
}

console.log(area)

// com let não é possível utilizar a variável antes se sua inicialização
// ela deve ser declarada antes de ser utilizada em um escopo diferente
let area;