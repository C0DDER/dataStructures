const { books } = require("../settings/books");
console.clear();

class mySet {
  constructor(books = []) {
    this.books = books;
  }

  list = () => {
    return this.books;
  };

  add = (book) => {
    if (this.has(book)) return false;
    this.books.push(book);

    return true;
  };

  remove = (index) => {
    this.books.splice(index, 1);
  };

  size = () => {
    return this.books.length;
  };

  has = (newBook) => {
    if (!newBook) throw Error("missing argument");

    return this.books.find((book) => {
      return book.title == newBook.title;
    });
  };

  union = (newSet) => {
    const unionSet = new mySet();

    this.list().forEach((book) => {
      unionSet.add(book);
    });

    newSet.forEach((book) => {
      unionSet.add(book);
    });
    return unionSet.list();
  };

  intersection = (newSet) => {
    const difference = new mySet();
    newSet.forEach((book) => {
      if (this.has(book)) difference.add(book);
    });
    return difference.list();
  };

  difference = (newSet) => {
    const difference = new mySet();
    newSet.forEach((book) => {
      if (!this.has(book)) difference.add(book);
    });
    return difference.list();
  };
}

const store = new mySet(books);

console.log(
  store.difference([
    {
      author: "G. Shield",
      title: "Java3",
      year: 2000,
    },
    {
      author: "G. Shield",
      title: "Java3",
      year: 2000,
    },
    {
      author: "G. Shield",
      title: "Java4",
      year: 2000,
    },
  ])
);
