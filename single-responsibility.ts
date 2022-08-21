//There should never be more than one reason for a class to change.

//Bad way
class Book {
  name: string;
  pagesCount: number;
  author: string;

  saveToFile(): void {
    // some fs.write method to save book to file
  }
}

//Good way
class Book {
  name: string;
  pagesCount: number;
  author: string;

  public saveToFile(): void {
    // some fs.write method to save book to file
  }
}

class Persist {
  saveToFile(book: Book): void {
    // some fs.write method to save book to file
  }
}
