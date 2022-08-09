import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "../model/book";

@Pipe({
  name: 'searchByString'
})

export class SearchByStringPipe implements PipeTransform {

  transform(courses: Book[], match: string): Book[] {
    if(!match) {
      return courses;
    }

    return courses.filter(item => item.name.toLowerCase().includes(match.toLowerCase()));
  }
}
