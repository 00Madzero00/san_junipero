import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor() {
  }

  public flip(elem) {
    let tmp;

    while ((elem = elem.parentElement) && !elem.classList.contains('container')) {
      tmp = elem;
    }

    tmp.classList.contains('flipped') ? tmp.className = 'card' : tmp.className = 'card flipped';
  }
}
