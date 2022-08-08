import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { MainViewComponent } from './main-view/main-view.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { HeaderComponent } from './header/header.component';
import { OrderByPipe } from './order-by.pipe';
import { SearchByStringPipe } from './search-by-string.pipe';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    MainViewComponent,
    BooksComponent,
    BookComponent,
    HeaderComponent,
    OrderByPipe,
    SearchByStringPipe,
    AddBookComponent,
    EditBookComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
