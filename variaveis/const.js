// const (não pode ser alterada no programa)
// deve ser inicializada no momento de sua declaração

const forma = 'triânglo';

const altura = 5;
const comprimento = 7;
let area;

if(forma === 'quadrado'){
        // se a variável não for declarada ela é criada como var
        area = altura * comprimento;
}else{
        area = (altura * comprimento) / 2;
}

console.log(area);