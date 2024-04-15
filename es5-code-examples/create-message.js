

const createMessage = (person) => {
    const name = person.name;
    const age = person.age;
    const city = "world";

    if (name.startsWith('John') && name.endsWith('Doe')) {
        return `Hello, ${name}! Your age is ${age} and you live in ${city}.`;
    } else {
        return 'Welcome, guest!';
    }
};

const people = [
    { name: 'John Doe', age: 30, city: 'Los Angeles' },
    { name: 'Jane Doe', age: 25 }
];

const messages = people.map(person => createMessage(person));

messages.forEach(message => console.log(message));

