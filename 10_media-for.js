const notas = [10, 6.7, 8.5, 7];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

let media = somaDasNotas / notas.length;

console.log(`A média desse aluno foi de: ${media}`);