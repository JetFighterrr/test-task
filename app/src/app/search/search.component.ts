import {Component, EventEmitter, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  searchText = '';

  @Output() filterValue = new EventEmitter<string>();
  @Output() orderBy = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  searchButtonClick() {
    if (!this.searchText) {
      alert('Search field is empty!');
      return;
    }

    this.filterValue.emit(this.searchText);
  }

  orderByButtonClick(){
    this.orderBy.emit();
  }

}
