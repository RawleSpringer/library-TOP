let myLibrary = [
  // { title: "Book 1", author: "Rawle", pages: 200, read: false },
  // { title: "Book 2", author: "Duranda", pages: 218, read: false },
  // { title: "Book 3", author: "Kim", pages: 133, read: true },
];

const booksContainer = document.querySelector(".container");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `The title of the book is ${this.name} and it is written by ${this.author}. It has ${pages} pages`;
};

const addBookToLibrary = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  let read = document.getElementsByName("read");

  for (i = 0; i < read.length; i++) {
    if (read[i].checked) {
      if (read[i].value == "0") {
        read = false;
      } else {
        read = true;
      }
    }
  }
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);

  return book;
};

const deleteBook = (id) => {
  const cards = document.querySelectorAll("[data-id]");
  cards[id].parentElement.remove();
  let numberID = parseInt(id);
  return myLibrary.filter((book, index) => {
    return numberID !== index;
  });
};

const readBook = (id) => {
  const cards = document.querySelectorAll("[data-id]");
  const readEl = document.querySelectorAll(".read-text");
  cards[id].read = !cards[id].read;
  cards[id].read
    ? (readEl[id].textContent = "Yes")
    : (readEl[id].textContent = "No");
};

const createCard = (indexNum) => {
  //create DOM elements
  const bookCard = document.createElement("div");
  bookCard.classList.add("card");
  const titleEl = document.createElement("h3");
  const authorEl = document.createElement("h4");
  const pagesEl = document.createElement("h4");
  const readEl = document.createElement("h4");
  const deleteButtonEl = document.createElement("button");
  const deleteButtonText = "Delete";
  // set attributes and event listener on delete DOM element
  deleteButtonEl.setAttribute("data-id", indexNum.toString());
  deleteButtonEl.setAttribute("class", "delete-button");
  deleteButtonEl.addEventListener("click", (e) => {
    let newLibrary = deleteBook(e.target.dataset.id);
    myLibrary = newLibrary;
    console.log(newLibrary);
  });
};
const displayLibrary = () => {
  document.querySelector(".container").innerHTML = "";
  myLibrary.forEach(({ title, author, pages, read }, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    bookCard.setAttribute("data-container-id", index.toString());
    const titleEl = document.createElement("h3");
    const authorEl = document.createElement("h4");
    const pagesEl = document.createElement("h4");
    const readEl = document.createElement("h4");
    readEl.setAttribute("class", "read-text");
    const deleteButtonEl = document.createElement("button");
    const deleteButtonText = "Delete";
    const readButtonText = "Read";
    const readButtonEl = document.createElement("button");

    deleteButtonEl.setAttribute("data-id", index.toString());
    deleteButtonEl.setAttribute("class", "delete-button");
    deleteButtonEl.addEventListener("click", (e) => {
      let newLibrary = deleteBook(e.target.dataset.id);
      myLibrary = newLibrary;
    });

    readButtonEl.setAttribute("data-id", index.toString());
    readButtonEl.setAttribute("class", "read-button");
    readButtonEl.addEventListener("click", (e) => {
      let newLibrary = readBook(e.target.dataset.id);
    });

    titleEl.textContent = `Title: ${title}`;
    authorEl.textContent = `Author: ${author}`;
    pagesEl.textContent = `Pages: ${pages}`;
    read ? (readEl.textContent = "Yes") : (readEl.textContent = "No");
    deleteButtonEl.textContent = deleteButtonText;
    readButtonEl.textContent = readButtonText;

    bookCard.appendChild(titleEl);
    bookCard.appendChild(authorEl);
    bookCard.appendChild(pagesEl);
    bookCard.appendChild(readEl);
    bookCard.appendChild(readButtonEl);
    bookCard.appendChild(deleteButtonEl);

    booksContainer.appendChild(bookCard);
  });
};

const addBookButton = document.querySelector(".new-book");
const form = document.querySelector(".add-form");
const submitButton = document.querySelector(".submit");
const deleteButtons = document.querySelectorAll(".delete-button");

//EVENT LISTENERS
addBookButton.addEventListener("click", (e) => {
  form.style.display = "block";
});

submitButton.addEventListener("click", () => {
  addBookToLibrary();
  displayLibrary();
});

displayLibrary();
