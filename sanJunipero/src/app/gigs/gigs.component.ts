import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { GigsService } from './gigs.service';

import { IEvent } from '../models/gigs.model';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.scss']
})
export class GigsComponent implements OnInit, OnDestroy {

  constructor(private gigs: GigsService) {}

  public events: IEvent;
  private subs: Subscription;

  ngOnInit(): void {
    this.subs = this.gigs.gigs.subscribe((res: IEvent) => {
      this.events = res;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public getGigs(): void {
    this.gigs.songKick();
  }

}
