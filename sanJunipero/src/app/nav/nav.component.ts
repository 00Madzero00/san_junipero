import { Component } from '@angular/core';

import { nav } from '../animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: nav
})
export class NavComponent {

  constructor() { }

  public isIn = {
    bool: false,
    state: 'collapsed'
  };

  public toggleState() {
    const bool = this.isIn.bool;
    console.log('toggled');
    bool === false ? this.isIn = {bool: true, state: 'expanded'} : this.isIn = {bool: false, state: 'collapsed'};
  }

}
