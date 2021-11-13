const nomes = ["João", "Maria", "Paulo", "Pedro", "Silvia", "Carlos"];

//slice corta o array, de acordo com 2 parâmetros que indicam o início e o fim do corte
const sala1 = nomes.slice(0, nomes.length/2);

const sala2 = nomes.slice(nomes.length/2);

console.log(`Número total de alunos: ${nomes.length}`)

console.log(`Alunos da sala1: ${sala1}`);
console.log(`Alunos da sala2: ${sala2}`);