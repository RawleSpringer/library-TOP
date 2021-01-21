let myLibrary = [
  { title: "Book 1", author: "Rawle", pages: 200, read: false },
  { title: "Book 2", author: "Duranda", pages: 218, read: false },
  { title: "Book 3", author: "Kim", pages: 133, read: true },
];

const booksContainer = document.querySelector(".container");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

Book.prototype.info = function () {
  return `The title of the book is ${this.name} and it is written by ${this.author}. It has ${pages} pages`;
};
function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const book = new Book(title, author, pages);
  myLibrary.push(book);
}

// addBookToLibrary();

myLibrary.forEach(({ title, author, pages, read }) => {
  const bookCard = document.createElement("div");
  bookCard.classList.add("card");
  const titleEl = document.createElement("h3");
  const authorEl = document.createElement("h4");
  const pagesEl = document.createElement("h4");
  const readEl = document.createElement("h4");

  titleEl.textContent = `Title: ${title}`;
  authorEl.textContent = `Author: ${author}`;
  pagesEl.textContent = `Pages: ${pages}`;
  read ? (readEl.textContent = "Yes") : (readEl.textContent = "No");

  console.log(readEl.textContent);

  bookCard.appendChild(titleEl);
  bookCard.appendChild(authorEl);
  bookCard.appendChild(pagesEl);
  bookCard.appendChild(readEl);

  booksContainer.appendChild(bookCard);
});

const addBookButton = document.querySelector(".new-book");
const form = document.querySelector(".modal");
const submitButton = document.querySelector(".submit");

addBookButton.addEventListener("click", (e) => {
  form.style.display = "block";
});

submitButton.addEventListener("click", () => {
  addBookToLibrary();

  const bookCard = document.createElement("div");
  bookCard.classList.add("card");
  const titleEl = document.createElement("h3");
  const authorEl = document.createElement("h4");
  const pagesEl = document.createElement("h4");
  const readEl = document.createElement("h4");

  const titleText = document.getElementById("title").value;
  const authorText = document.getElementById("author").value;
  const pagesText = document.getElementById("pages").value;

  titleEl.textContent = `Title: ${titleText}`;
  authorEl.textContent = `Author: ${authorText}`;
  pagesEl.textContent = `Pages: ${pagesText}`;
  false ? (readEl.textContent = "Yes") : (readEl.textContent = "No");

  bookCard.appendChild(titleEl);
  bookCard.appendChild(authorEl);
  bookCard.appendChild(pagesEl);
  bookCard.appendChild(readEl);

  booksContainer.appendChild(bookCard);
});
