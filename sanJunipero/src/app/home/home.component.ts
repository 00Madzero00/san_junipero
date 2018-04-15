import { Inject, Component, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.handleJumbo();
    }
  }

  public height;
  public width;

  private handleJumbo() {
    const video = document.getElementsByClassName('jumbo');
    const _self = this;

    this.height = window.innerHeight - 100;
    this.width = window.innerWidth;

    window.addEventListener('resize', function() {
      _self.height = this.innerHeight - 100;
      _self.width = this.innerWidth;
    });

  }

  ngOnInit() {
  }

}
