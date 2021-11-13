const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

//callback função que chama outra
//pode receber até 3 parâmetros
//o elemento, o índice e o array atual
notas.forEach(nota => {
                    //notas[i]
    somaDasNotas += nota
});

let media = somaDasNotas/notas.length;

console.log(media);