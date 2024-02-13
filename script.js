
let Library = [];
function Books(bookId,bookTitle,bookAuthor){
    this.id = Books.nextId++;
    this.title = bookTitle;
    this.author = bookAuthor;
    this.isborrowed = false;
}
Books.nextId = 100;
let newBook = new Books(100,"The Alchemist", "Paulo Coelho");
Library.push(newBook);

let newBook1 = new Books(101,"Atomic Habbits", "James Clear");
Library.push(newBook1);


function addBook(){
    const bookTitle = document.getElementById("title").value;
    let bookId = document.getElementById("id").value;
    const bookAuthor = document.getElementById("author").value;

    const newBook = new Books(bookId++,bookTitle,bookAuthor,);
    Library.push(newBook);
    bookList();
    
}
function searchBook(){
    const bookTitle = document.getElementById("searchTitle").value;
    let book = false;
    for (let check of Library){
        if (check.title === bookTitle) {
            book = true;
            const display = document.getElementById("display");
            const h = document.createElement('h3');
            const p = document.createElement('p');
            p.innerHTML = "available!"
            h.innerHTML = "Result";           
            display.appendChild(h);
            display.appendChild(p)
        }
    } if(!book){
        alert("not available")
    }
}
function bookList(){
    const bookrows  = document.getElementById("list");
    bookrows.innerHTML = ''
    for (let check of Library ){
        const row = document.createElement('tr');
        for (let keys in check){
            const cell  = document.createElement('td');
            if (keys === 'isborrowed') { // Adjusted to match the property name in the constructor
                cell.textContent = check[keys] ? 'Unvailable' : 'Available';
            } else {
                cell.textContent = check[keys];
            }
            // cell.textContent = check[keys];
            row.appendChild(cell);


        }
        const borrowReturnBtn = document.createElement('button');
        borrowReturnBtn.textContent = check.isborrowed ? 'Return' : 'Borrow';
        borrowReturnBtn.addEventListener('click', () => borrowReturnBook(check.id));
        
        const borrowReturnBtnCell = document.createElement('td'); 
        borrowReturnBtnCell.appendChild(borrowReturnBtn);
        row.appendChild(borrowReturnBtnCell);

        bookrows.appendChild(row);
       
    }
}
function borrowReturnBook(bookId) {
    const bookIndex = Library.findIndex(book => book.id === bookId);
     const currentStatus = Library[bookIndex].isborrowed;
    const newStatus = !currentStatus;
    Library[bookIndex].isborrowed = newStatus;
    bookList();
  }