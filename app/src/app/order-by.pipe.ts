import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "./book";

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {

  transform(courses: Book[], sortingNeeded: number): Book[] {
    switch (sortingNeeded){
      // Sorting by name
      case 1: return  courses.sort((item1, item2) =>
        item1.name > item2.name ? 1 : -1);
      // Sorting by author
      case 2: return courses.sort((item1, item2) =>
        item1.author > item2.author ? 1 : -1);
      // Default sorting by id
      default: return courses.sort((item1, item2) => item1.id - item2.id);
    }
  }

}
