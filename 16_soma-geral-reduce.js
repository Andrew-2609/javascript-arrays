const salaJavaScript = [7, 8, 9, 10, 5, 3, 9, 9, 4, 6, 7];
const salaJava = [2, 6, 8, 3, 10, 9, 4, 3, 4, 6, 8, 9];
const salaPython = [9, 8, 7, 9, 7, 7, 9, 8, 8, 7];

const calcularMediaDaSala = (notasDaSala) => {
    let somaDasNotas = notasDaSala.reduce((acum, atual) => atual += acum, 0);
    return somaDasNotas / notasDaSala.length;
};

console.log(`Média das notas da sala de JavaScript: ${calcularMediaDaSala(salaJavaScript)}`);
console.log(`Média das notas da sala de Java: ${calcularMediaDaSala(salaJava)}`);
console.log(`Média das notas da sala de Python: ${calcularMediaDaSala(salaPython)}`);