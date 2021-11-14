const notas = [10, 9, 8, 7];

//o map() retorna um array atualizado
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota);

console.log(notasAtualizadas);