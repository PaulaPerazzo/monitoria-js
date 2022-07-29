class Book {
  constructor(title, description, author) {
    this.title = title;
    this.description = description;
    this.author = author;
  };
};

class Library {
  constructor(books) {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  };

  get getBooks() {
    console.log(this.books);
  };

  removeBookById(id) {
    if ((id+1) > this.books.length) {
      console.log('this book doesnt exists');
    } else {
      this.books.splice(id, 1)
      console.log('book removed');
    };
  };

  getBookById(id) {
    if ((id+1) > this.books.length) {
      console.log('this book doesnt exists');
    } else {
      console.log(this.books[id]);
    };
  };

  updateBookById(id, title, description, author) {
    if ((id+1) > this.books.length) {
      console.log('this book doesnt exists');
    } else {
      const book = this.books[id];
      book.title = title;
      book.description = description;
      book.author = author;
    };
  } ;
};
