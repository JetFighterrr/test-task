import { Injectable } from '@angular/core';
import {Book} from "../model/book";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private nextId = 5;

  private books: Book[] = [
    { name: 'The Art of War', id: 1, author: 'Sun Tzu'},
    { name: 'The Path  of Warrior', id: 2, author: 'Sun Tzu'},
    { name: 'The Art of War and Other Classics of Eastern Thought', id: 3, author: 'Sun Tzu'},
    { name: 'The Art of War/The Book Of Lord Shang', id: 4, author: 'Sun Tzu'},
  ];

  constructor() { }

  getList(): Book[] {
    return this.books;
  }

  createBook(books: Book) {
    books.id = this.nextId;
    this.books.push(books);
    this.nextId++;
  }

  getItemById(id: number) {
    for(let books of this.books) {
      if(books.id == id) {
        return books;
      }
    }

    return this.books[0];
  }

  updateItem(id: number, updatedBook: Book) {
    for(let book of this.books) {
      if(book.id == id) {
        book = {
          name: updatedBook.name,
          author: updatedBook.author,
          id: id,
        };
      }
    }
  }

  deleteItem(uniqId: number) {
    const index = this.books.findIndex( (element) => element.id === uniqId );

    if(index >= 0) {
      this.books = [...this.books.slice(0, index), ...this.books.slice(index + 1)];
    }
  }
}
