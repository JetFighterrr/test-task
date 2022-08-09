import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {DataService} from "../services/data.service";
import { ActivatedRoute} from '@angular/router';
import {Router} from "@angular/router";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.sass']
})
export class EditBookComponent implements OnInit {

  book: Book = {
    name: 'abc',
    id: 0,
    author: 'xyz',
  };
  id = 0;

  constructor(private readonly dataService:DataService, private route: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    let id = 0;
    this.route.params.subscribe((routeParams) => {
      this.id = routeParams.id;
    });
    this.book = this.dataService.getItemById(this.id);
  }

  save():void {
    if(!this.book.name){
      return;
    }

    this.dataService.updateItem(this.id, this.book);
    this.navigateBack();
  }

  cancel(){
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(["books"],{queryParams: { redirectedFromClass: true} });
  }
}
