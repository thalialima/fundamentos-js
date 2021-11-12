//parâmetros permitem que a função receba dados para manipulá-los
function soma(num1, num2){
        return num1 + num2;
}

//é possível definir um valor padrão para um parâmetro
//caso a função receba menos argumentos
function multiplica(num1 = 1, num2 = 1){
        return num1 * num2;
}

//é uma boa prática colocar poucos parâmetros em uma função

console.log(multiplica(soma(4, 5)));

//ordem dos parâmetros

function nomeIdade(nome, idade){
        return `Meu nome é ${nome}\nMinha idade é: ${idade}`;
}

console.log(nomeIdade('Thalia', 25));

//arâmetros no momento em que a função é definida (no caso, numero1, numero2, etc)
//argumentos são os dados que utilizamos para executar a função (ou seja, 30, 45, etc)