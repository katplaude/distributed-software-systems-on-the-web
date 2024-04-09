function createMessage(person) {
    var name = person.name;
    var age = person.age;
    var city = "world";

    if (typeof person.city !== "undefined") {
        city = person.city;
    }

    if (name.indexOf('John') === 0 && name.indexOf('Doe') === name.length - 3) {
        return 'Hello, ' + name + '! Your age is ' + age + ' and you live in ' + city + '.';
    } else {
        return 'Welcome, guest!';
    }
}

var people = [{ name: 'John Doe', age: 30, city: 'Los Angeles' }, { name: 'Jane Doe', age: 25 }];
var messages = [];
for (var i = 0; i < people.length; i++) {
    messages.push(createMessage(people[i]));
}

for (var j = 0; j < messages.length; j++){
    console.log(messages[j])
}
