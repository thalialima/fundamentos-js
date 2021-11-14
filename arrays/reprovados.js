const nomes = ['Ana', 'Maria', 'Marcos', 'João'];
const notas = [7, 4.5, 8, 7.5];

//retorna apenas alguns elemetos do arrays
//baseado em uma condição
const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5);

console.log(`Reprovados: ${reprovados}`);
