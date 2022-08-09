import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../book";
import {AuthService} from "../auth.service";

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

  canEdit = false;
  canDelete = false;

  @Output() needDeleteBook = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.canEdit = AuthService.canEdit;
    this.canDelete = AuthService.canDelete;
  }

  deleteBook() {
    if (window.confirm("Do you really want to delete this book?")) {
      this.needDeleteBook.emit(this.book.id);
    }
  }
}
