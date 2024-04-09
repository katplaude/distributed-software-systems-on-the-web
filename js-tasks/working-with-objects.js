const library = [
    {title: 'The Road Ahead', author: 'Bill Gates', year: 1995, bestseller: true},
    {title: 'Walter Isaacson', author: 'Steve Jobs', year: 2011, bestseller: true},
    {title: 'Mockingjay', author: 'Suzanne Collins', year: 2010, bestseller: false},
    {title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008, bestseller: true}
]

// Log the result after each task:

// List each author (without duplicates)...
const authors = library.map(element => element.author);
const noDuplicates = [...new Set(authors)];
console.log(noDuplicates.join());

// List all book titles published after 2000...
const years = library.filter(element=> element.year > 2000);
const titles = years.map(element => element.title);
console.log(titles.join());

// List all property names of the first book separated by a comma (expected output: 'title, author, year')...

// List all bestseller book titles...
