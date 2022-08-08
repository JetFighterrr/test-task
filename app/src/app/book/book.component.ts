import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input() book: Book = {
    name: "Default",
    author: 'Best',
    id: 0,
  }

  @Output() needDeleteBook = new EventEmitter<number>();

  constructor() { }

  deleteBook() {
    if (window.confirm("Do you really want to delete this book?")) {
      this.needDeleteBook.emit(this.book.id);
    }
  }
}
