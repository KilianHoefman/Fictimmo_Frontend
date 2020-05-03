import { Injectable } from '@angular/core';
import { ImmoBureau } from './immo-bureau.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImmoBureauDataService {
  constructor(private http: HttpClient) { }

  get immoBureaus$(): Observable<ImmoBureau[]> {
    return this.http
      .get(`${environment.apiUrl}/ImmoBureaus/`)      
      .pipe(tap(console.log), shareReplay(1), catchError(this.handleError),
      map((list: any[]): ImmoBureau[] => list.map(ImmoBureau.fromJSON)));
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
