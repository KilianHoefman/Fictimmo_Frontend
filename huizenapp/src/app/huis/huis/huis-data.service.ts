import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Huis } from './huis.model';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HuisDataService {
  constructor(private http: HttpClient) {}

  get huizen$(): Observable<Huis[]> {
    return this.http
      .get(`${environment.apiUrl}/huizen/`)
      .pipe(map((list: any[]): Huis[] => list.map(Huis.fromJSON)));
  }

  addNewHuis(huis$: Huis){
    throw 'not implemented yet';
  }
}
