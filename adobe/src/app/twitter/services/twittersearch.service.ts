import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Search } from '../models/twittersearch.model';


@Injectable()
export class TwitterSearchDataService {
  constructor(private http: HttpClient) { }

  getSearchResult(payload: any){
    return this.http
      .get<Search>(`twittersearch?key=${payload}`)
      .pipe(map((data: any) => {
        return data.statuses;
      }), catchError((error: any) => {
        return throwError(new Error(error.json()))
      }));
  }
}
