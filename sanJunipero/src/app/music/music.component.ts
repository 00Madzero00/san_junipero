import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public flip(elem) {
    let tmp;
    while ((elem = elem.parentElement) && !elem.classList.contains('container')) {
      tmp = elem;
    }
    tmp.classList.contains('flipped') ? tmp.className = 'card' : tmp.className = 'card flipped';
  }
}
