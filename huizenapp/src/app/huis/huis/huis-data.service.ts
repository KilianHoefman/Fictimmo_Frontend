import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError, scan, switchMap, shareReplay } from 'rxjs/operators';
import { Huis } from './huis.model';
import { Observable, pipe, of, throwError, Subject, merge, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HuisDataService {  
  private _huizen$ = new BehaviorSubject<Huis[]>([]);
  private _huizen: Huis[];

  constructor(private http: HttpClient) {}

  getHuis$(id: string) : Observable<Huis>{
    return this.http
    .get(`${environment.apiUrl}/huizen/${id}`)
    .pipe(catchError(this.handleError), map(Huis.fromJSON));
  }

  get allHuizen$(): Observable<Huis[]> {
    return this._huizen$;
  }

  get huizen$(): Observable<Huis[]> {
      return this.http.get(`${environment.apiUrl}/huizen/`).pipe(
        shareReplay(1),
        catchError(this.handleError),
        map((list: any[]): Huis[] => list.map(Huis.fromJSON))
      );
  }

  addNewHuis(huis: Huis){
    return this.http
      .post(`${environment.apiUrl}/huizen/`, huis.toJSON())
      .pipe(catchError(this.handleError), map(Huis.fromJSON))
      .subscribe((h: Huis) => {
        this._huizen = [...this._huizen, h];
        this._huizen$.next(this._huizen);
    });
  }

  deleteHuis(huis: Huis){
    return this.http
    .delete(`${environment.apiUrl}/huizen/${huis.id}`)
    .pipe(catchError(this.handleError))
    .subscribe(() => {
      this._huizen = this._huizen.filter(h => h.id != huis.id);
      this._huizen$.next(this._huizen);
    });
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
