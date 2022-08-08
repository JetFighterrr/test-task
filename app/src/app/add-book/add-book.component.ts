import { Component, Output, EventEmitter } from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.sass']
})
export class AddBookComponent {

  @Output() stopAddingBook = new EventEmitter<void>();
  @Output() addBook = new EventEmitter<Book>();
  book: Book = {
    name: '',
    id: 0,
    author: '',
  };

  constructor() { }

  save():void {
    if(!this.book.name){
      return;
    }

    if(!this.book.author){
      return;
    }

    this.addBook.emit(this.book);
  }

  cancel(){
    this.stopAddingBook.emit();
  }
}
