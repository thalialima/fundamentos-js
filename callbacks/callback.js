const nomes = ['Thalia', 'Irene', 'Maria', 'Lúcia'];

//forEach() não retorna nada, simplesmente executa
//o que está dentro do bloco
nomes.forEach(imprimeNome, indice);

function imprimeNome(nome){
    console.log(nome);
}