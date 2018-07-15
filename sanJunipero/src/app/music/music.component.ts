import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  public music;

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit() {
    this.musicService.getMusicJSON()
      .then(
        m => {
          if (m) {
            console.log('music', m);
            this.music = m;
          }
        }
      );
  }

  public flip(elem) {
    let tmp;
    while ((elem = elem.parentElement) && !elem.classList.contains('container')) {
      tmp = elem;
    }
    tmp.classList.contains('flipped') ? tmp.className = 'card' : tmp.className = 'card flipped';
  }
}
