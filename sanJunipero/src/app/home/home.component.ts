import { Inject, Component, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private hs: HomeService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.handleJumbo();
    }
  }

  public height: number;
  public width: number;
  public orientation: Boolean;

  ngOnInit() {
    console.log(this.hs.jumboCache);
  }

/**
 * @description Sizes jumbo and adds an event listener for window resize
 *
 * @private
 * @memberof HomeComponent
 */
  private handleJumbo() {
    const video = document.getElementsByClassName('jumbo');
    const _self = this;

    console.log(video);

    this.height = window.innerHeight - 250;
    this.width = window.innerWidth;

    this.orientation = this.getOrientation(window);

    window.addEventListener('resize', function() {
      _self.orientation = _self.getOrientation(this);
      _self.height = this.innerHeight - 250;
      _self.width = this.innerWidth;
    });

  }

/**
 * @description Checks to see if the window orientation is horizontal or vertical
 *
 * @private
 * @param {Window} w
 * @returns Boolean
 * @memberof HomeComponent
 */
  private getOrientation(w: Window) {
    if (w.innerHeight < w.innerWidth) {
      return true;
    } else {
      return false;
    }
  }

}
