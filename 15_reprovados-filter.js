const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 9, 7.5];

const reprovados = nomes.filter((_, indice) => {
    return notas[indice] < 7;
});

console.log(`Lista de alunos: ${nomes}.\nAlunos reprovados: ${reprovados}`);