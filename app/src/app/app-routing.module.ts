import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {LoginScreenComponent} from "./login-screen/login-screen.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginScreenComponent},
  {path: "books", component: BooksComponent},
  {path: "books/:id", component: EditBookComponent},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
