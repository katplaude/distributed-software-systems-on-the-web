const people = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 },
    { name: 'Emily Davis', age: 35 },
    { name: 'Jannet Jones', age: 22 }
];

// Log the result after each task:

// 1. Sort people by age...
const sortedPeople = people.sort((a, b) => a.age - b.age);
console.log(sortedPeople);
// 2. Find a person whose name starts with 'Jan'...
const Jan = people.find(person => person.name.startsWith("Jan"));
console.log(Jan)
// 3. Joining all names together to form a single string separated by a comma...
const names= people.map(person => person.name)
console.log(names.join());

