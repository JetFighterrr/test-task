import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Book} from "../book";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.sass']
})
export class AddBookComponent implements OnInit {

  @Output() stopAddingBook = new EventEmitter<void>();
  @Output() addBook = new EventEmitter<Book>();
  book: Book = {
    name: '',
    id: 0,
    author: '',
  };
  canEdit = false;

  constructor() { }


  ngOnInit() {
    this.canEdit = AuthService.canEdit;
  }

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
