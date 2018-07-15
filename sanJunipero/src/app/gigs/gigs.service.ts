import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { IEvent } from '../models/gigs.model';

@Injectable()
export class GigsService {

  constructor(
    private http: HttpClient
  ) { }

  public gigs: BehaviorSubject<IEvent> = new BehaviorSubject(null);

  /**
  * @description Get events from songkick and update the gigs subject on retrieval
  *
  * @memberof GigsService
  */
  public songKick() {
    // const baseURI = 'http://api.songkick.com/api/3.0/artists/{artist_id}/calendar.json?apikey={your_api_key}';

    // this.http.get(baseURI).subscribe(
    //   (resp: IEvent) => {
    //     console.log(resp);
    //     this.gigs.next(resp);
    //   }
    // );
  }
}
