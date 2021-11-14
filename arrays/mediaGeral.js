const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function media(sala){
    const somaDasNotas = sala.reduce((acumulador, atual) => atual + acumulador, 0)
    return somaDasNotas/sala.length;
}

console.log(`Média da sala de JavaScript ${media(salaJs)}`);
console.log(`Média da sala de Java ${media(salaJava)}`);
console.log(`Média da sala de Python ${media(salaPython)}`);

const notas = [10, 6.5, 8, 7];
                                    //função callback                      //indice 
const mediaDasNotas = notas.reduce((acumulador, atual) => atual + acumulador, 0)/notas.length;
            
console.log(`Média das notas: ${mediaDasNotas}`);