// TODO: define addFavoriteBook(..) function

function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
}

// TODO: define printFavoriteBooks() function

function printFavoriteBooks() {
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}


var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();