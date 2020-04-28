import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Huis } from './huis.model';
import { Observable, pipe, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HuisDataService {
  constructor(private http: HttpClient) {}

  get huizen$(): Observable<Huis[]> {
    return this.http
      .get(`${environment.apiUrl}/huizen/`)      
      .pipe(catchError(this.handleError), tap(console.log) ,map((list: any[]): Huis[] => list.map(Huis.fromJSON)));
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

  addNewHuis(huis: Huis){
    throw 'not implemented yet';
    // return this.http.post(`${environment.apiUrl}/huizen/`, huis.toJSON())
    // .pipe(catchError(this.handleError), map(Huis.fromJSON))
    // .subscribe();
  }
}
