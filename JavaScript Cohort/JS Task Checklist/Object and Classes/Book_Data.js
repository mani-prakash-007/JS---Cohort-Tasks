//a.

class book {
  constructor(title, author, publisher, year, genre) {
    this.tilte = title;
    this.author = author;
    this.publisher = publisher;
    this.year = year;
    this.genre = genre;
  }
  //b.
  describe() {
    console.log(`"${this.tilte}" - ${this.author} (${this.year})`);
  }

  //c.
  displayGenre() {
    console.log(`${this.genre}`);
  }
}
//d.
const classicBook = new book(
  "Pride and Prejudice",
  "Jane Austen",
  "T. Egerton, Whitehall",
  1813,
  "Romance, Comedy of Manners"
);

console.log(classicBook);
//e.
const sciFiBook = new book(
  "Dune",
  "Frank Herbert",
  "Chilton Books",
  1965,
  "Science Fiction"
);

console.log(sciFiBook);

//f.
classicBook.describe();

//g.
sciFiBook.displayGenre();
