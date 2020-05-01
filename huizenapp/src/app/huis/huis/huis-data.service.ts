import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError, scan } from 'rxjs/operators';
import { Huis } from './huis.model';
import { Observable, pipe, of, throwError, Subject, merge } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HuisDataService {  
  private _addedHuizen$ = new Subject<Huis>();
  private _allHuizen$: Observable<Huis[]> = merge(
    this.huizen$,
    this._addedHuizen$
  ).pipe(scan((acc: Huis[], value: Huis) => [...acc, value]));

  constructor(private http: HttpClient) {}

  get allHuizen$(): Observable<Huis[]> {
    return this._allHuizen$;
  }

  get huizen$(): Observable<Huis[]> {
      return this.http.get(`${environment.apiUrl}/huizen/`).pipe(
        catchError(this.handleError),
        map((list: any[]): Huis[] => list.map(Huis.fromJSON))
      );
  }

  addNewHuis(huis: Huis){
    return this.http
      .post(`${environment.apiUrl}/huizen/`, huis.toJSON())
      .pipe(catchError(this.handleError), map(Huis.fromJSON))
      .subscribe((hu: Huis) => this._addedHuizen$.next(hu));
  }
  
  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = err;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
