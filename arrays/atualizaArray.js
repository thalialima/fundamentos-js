const listaDeChamada = ["João", "Maria", "Paulo", "Pedro", "Silvia", "Carlos"];

//permite remover elementos de qualquer lugar do array
//permite colocar elementos em qualquer lugar também
//(indice que começa, quantidade de elementos, elemento adicionado)
//pode ser usado sem o terceiro parâmetro
listaDeChamada.splice(1, 2, 'Rodrigo');

console.log(`Lista atualizada ${listaDeChamada}`);