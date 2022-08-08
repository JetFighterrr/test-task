import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @Input() user = 'User name';
  @Output() logoff = new EventEmitter<void>();

  constructor(private router:Router) { }

  logoffEvent(): void {
    this.router.navigate(["login"],{queryParams: { redirectedFromClass: true} });
    this.logoff.emit();
  }

}
