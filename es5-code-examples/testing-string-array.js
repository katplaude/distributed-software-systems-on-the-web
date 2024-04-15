

const fruits = ['apple', 'banana', 'cherry'];

const includesBanana = fruits.includes('banana');
console.log('Includes banana:', includesBanana);

const everyFruitHasMoreThanFiveChars = fruits.every(fruit => fruit.length > 5);
console.log('Every fruit has more than five characters:', everyFruitHasMoreThanFiveChars);

const someFruitsHaveMoreThanFiveChars = fruits.some(fruit => fruit.length > 5);
console.log('Some fruits have more than five characters:', someFruitsHaveMoreThanFiveChars);
