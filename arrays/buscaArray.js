const listaDeChamada = ["João", "Maria", "Paulo", "Pedro", "Silvia", "Carlos", "Rodrigo"];

const mediaDosAlunos = [10, 7, 9, 6, 8.5, 8, 6.5];

const alunosESuasMedias = [listaDeChamada, mediaDosAlunos];

//arrow function
const buscaAluno = (aluno) => {
        if(alunosESuasMedias[0].includes(aluno)){
                //
                let indice = alunosESuasMedias[0].indexOf(aluno);
                return alunosESuasMedias[0][indice] + ' sua média é: ' + alunosESuasMedias[1][indice];
        }else{
                console.log('O aluno não está na lista!');
        }
}

console.log(buscaAluno('Rodrigo'));