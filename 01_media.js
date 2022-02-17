// desafio: calcular média das notas 10, 6.5, 8 e 7.5

// let primeiraNota = 10;
// let segundaNota = 6.5;
// let terceiraNota = 8;
// let quartaNota = 7.5;

// let media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;

const notas = [10, 6.5, 8, 7.5];

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média das notas é: ${media}`);