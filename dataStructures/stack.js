const { books } = require('../settings/books');
console.clear();

class Stack {
    constructor(books = []) {
        this.books = books;
        this.count = this.books.length;
    }

    getBooks = () => {
        return this.books;
    }

    getCount = () => {
        return this.count;
    }

    push = (book) => {
        this
            .books
            .push(book);
        this.count++;
    }

    pop = () => {
        this
            .books
            .pop();
        this.count--;
    }

    peek = (number) => {
        return this.books[number - 1];
    }

}

const store = new Stack(books);

console.log(store.peek(2));

