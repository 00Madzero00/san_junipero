import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class MusicService {

  constructor(
    private http: HttpClient
  ) { }

  public getMusicJSON() {
    return this.http.get('../../../assets/data/music.json')
      .toPromise()
      .then(
        res => {
          return res;
        }
      );
    //   .pipe(
    //     tap(
    //       res => {
    //         console.log('data', res);
    //         return res;
    //       }
    //     )
    // );
  }
}
