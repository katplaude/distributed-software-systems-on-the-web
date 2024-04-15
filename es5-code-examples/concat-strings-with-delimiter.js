

const concatenateStrings = (strings, delimiter = ', ') => {
    let result = '';

    strings.forEach((str, index) => {
        result += str;
        if (index < strings.length - 1) {
            result += delimiter;
        }
    });

    return result;
};

const words = ['Hello', 'world', 'of', 'JavaScript'];
const sentence = concatenateStrings(words);

console.log(sentence);
