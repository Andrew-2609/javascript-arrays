const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Isabela', 'Vinicius', 'Vivian', 'Daisy', 'Camilo']

// salaA vai do índice 0 até metade do array
const salaA = nomes.slice(0, nomes.length / 2);
// salaB vai da metade do array até seu fim, já que o fim não foi especificado explicitamente
const salaB = nomes.slice(nomes.length / 2);

console.log(`Alunos da Sala A: ${salaA}`);
console.log(`Alunos da Sala B: ${salaB}`);