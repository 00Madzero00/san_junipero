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

  public flip(event) {
    const findCard = /card/;
    const findFlip = /flipped/;

    const tmp = event.path.filter(elem => {
      if (findCard.test(elem.className)) {
        return elem;
      }
    });

    findFlip.test(tmp[0].className) ? tmp[0].className = 'card' : tmp[0].className = 'card flipped';
  }
}
