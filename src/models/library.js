//Note: This is a library for the book management system.
//This is memory based which the whole library and books data is not persisted between different times.

//In order maintain state , persisted data . Implement 	DATABASE.

export class Book {
	constructor(title, author, isbn) {
		this.title = title
		this.author = author
		this.isbn = isbn
	}

	display() {
		return this
	}
}

class Library {
	constructor() {
		//Storing list of books in a map.
		//Key is the isbn of the book and value is the book itself.
		this.books = new Map()
	}

	add_book(book) {
		if (book == null) throw new Error("Book is null")

		this.books.set(`${book.isbn}`, book)

		// return the books array if the book is added successfully, otherwise return null.
		return this.books.has(book.isbn) ? book.isbn : null
	}

	remove_book(isbn) {
		if (isbn == null) throw new Error("ISBN is null")
		
		if (this.books.has(`${isbn}`) == false) throw new Error("Book not found")

		return this.books.delete(isbn) ? isbn : null
	}

	get_book_info(isbn) {
		if (isbn == null) throw new Error("ISBN is null")

		if (this.books.has(`${isbn}`) == false) throw new Error("Book not found")

		return this.books.get(isbn).display()
	}

	list_books() {
		//List of all books in the library.
		return [...this.books.values()]
	}
}

const library = new Library([])

//#region  library crud operations

console.log("\nlist of books in library", library.list_books())

console.log(
	"\nadded:",
	library.add_book(new Book("Harry Potter", "J.K Rowling", "1234567890"))
)
console.log(
	"\nadded:",
	library.add_book(new Book("Harry Potter 2", "J.K Rowling", "1234567891"))
)
console.log(
	"\nadded:",
	library.add_book(new Book("Harry Potter 3", "J.K Rowling", "1234567892"))
)

console.log("\nlist of books in library", library.list_books())

console.log("\nremoved:", library.remove_book("1234567892"))

console.log("\nlist of books in library", library.list_books())

//#endregion

//Book Info
console.log("\nBook Info:", library.get_book_info("1234567891"))

export default library
