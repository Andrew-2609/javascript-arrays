const notas = [10, 6.7, 8.5, 7];

let somaDasNotas = 0;

notas.forEach(nota => {
   somaDasNotas += nota;
});

let media = somaDasNotas / notas.length;

console.log(`A média do aluno foi de: ${media}`);