import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../book";
import {AuthService} from "../auth.service";
import {AddBookComponent} from "../add-book/add-book.component";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})

export class BooksComponent implements OnInit{
  searchByString = '';
  sortingRequired = 0;
  showModal = false;
  canEdit = false;
  user = 'Default';

  public books: Book[] = [];

  constructor(private readonly dataService:DataService) {
    this.books = this.dataService.getList();
  }

  ngOnInit() {
    this.canEdit = AuthService.canEdit;
    this.user = AuthService.getUserInfo();
  }

  search(value: string): void {
    this.searchByString = value.trim();
  }

  sort() {
    this.sortingRequired = (this.sortingRequired + 1) % 3;
  }

  deleteBook(bookId: number){
    this.dataService.deleteItem(bookId);
    this.updateList();
  }

  getModal():void {
    this.showModal = true;
  }

  hideModal():void {
    this.showModal = false;
  }

  addBook(newBook: Book){
    this.dataService.createBook(newBook);
    this.hideModal();
    this.updateList();
  }

  private updateList(){
    this.books = this.dataService.getList();
  }
}
