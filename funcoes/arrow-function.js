// funções de seta do ES6

function apresentar(nome){
        return `Meu nome é ${nome}`;
}

// arrow function não pode ser nomeada
const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

//arrow function com + de uma linha
const somaNumerosPequenos = (num1, num2) => {
        if(num1 || num2 > 10){
                return 'Essa função só aceita númaros pequenos (1 a 9)';
        }else{
                return num1 + num2;
        }
}

// HOISTING: arrow function funciona da mesma forma de expressões de funções