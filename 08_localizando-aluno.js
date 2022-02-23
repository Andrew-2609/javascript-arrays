const alunos = ['João', 'Juliano', 'Caio', 'Alana'];
const mediasDosAlunos = [10, 7, 9, 6];

const listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return `A média do aluno ${nomeDoAluno} é ${listaDeNotasEAlunos[1][indice]}`;
    } else {
        return 'Aluno não encontrado =(.';
    }
};

console.log(exibeNomeNota('Caio'));
console.log(exibeNomeNota('Pedro'));