import { Component} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent {

  searchByString = '';
  sortingRequired = 0;
  showModal = false;

  public books: Book[] = [];

  constructor(private readonly dataService:DataService) {
    this.books = this.dataService.getList();
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
