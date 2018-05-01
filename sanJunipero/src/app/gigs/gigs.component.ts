import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { GigsService } from './gigs.service';

import { IEvent } from '../models/gigs.model';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.scss']
})
export class GigsComponent implements OnInit, OnDestroy {

  constructor(private gigs: GigsService) {
    this.subs = this.gigs.gigs.subscribe((res: IEvent) => {
      this.events = res;
    });
  }

  public events: IEvent;
  private subs: Subscription;

  ngOnInit() {
    this.getGigs();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private getGigs() {
    this.gigs.songKick();
  }

}
