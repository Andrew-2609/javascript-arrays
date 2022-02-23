const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva', 'pedro'];

const capitalize = (value) => {
    let words = String(value).split(' ');
    let capitalizedWord = '';
    words.forEach(word => {
        let fullWord = word[0].toUpperCase().concat(word.substring(1).toLowerCase());
        capitalizedWord === '' ? capitalizedWord = fullWord : capitalizedWord += ' ' + fullWord;
    });
    return capitalizedWord;
};

const nomesAtualizados = nomes.map(capitalize);

console.log(nomesAtualizados);