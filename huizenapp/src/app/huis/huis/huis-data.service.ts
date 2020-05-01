import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Huis } from './huis.model';
import { Observable, pipe, of, throwError, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HuisDataService {  
  private _huizen$ = new BehaviorSubject<Huis[]>([]);
  private _huizen: Huis[];

  constructor(private http: HttpClient) {
    this.huizen$.subscribe((huizen: Huis[]) => {
      this._huizen = huizen;
      this._huizen$.next(this._huizen);
    })
  }

  get allHuizen$(): Observable<Huis[]> {
    return this.huizen$;
  }

  get huizen$(): Observable<Huis[]> {
    return this.http
      .get(`${environment.apiUrl}/huizen/`)      
      .pipe(catchError(this.handleError), map((list: any[]): Huis[] => list.map(Huis.fromJSON)));
  }

  addNewHuis(huis: Huis){
    return this.http.post(`${environment.apiUrl}/huizen/`, huis.toJSON())
    .pipe(tap(), catchError(this.handleError), map(Huis.fromJSON))
    .subscribe((hu: Huis) => {
      this._huizen = [...this._huizen, hu];
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
