import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { MainViewComponent } from './main-view/main-view.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { HeaderComponent } from './header/header.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchByStringPipe } from './pipes/search-by-string.pipe';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import {FormsModule} from "@angular/forms";
import { NotFoundComponent } from './not-found/not-found.component';
import { NoDataComponent } from './no-data/no-data.component';
import { SearchComponent } from './search/search.component';

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
    EditBookComponent,
    NotFoundComponent,
    NoDataComponent,
    SearchComponent
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
