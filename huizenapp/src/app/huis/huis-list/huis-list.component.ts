import { Component, OnInit } from '@angular/core';
import { Huis } from '../huis/huis.model';
import { HuisDataService } from '../huis/huis-data.service';
import { Subject, Observable, EMPTY } from 'rxjs';
 import {
   distinctUntilChanged,
   debounceTime,
   map,
   filter,
   catchError
 } from 'rxjs/operators';

@Component({
  selector: 'app-huis-list',
  templateUrl: './huis-list.component.html',
  styleUrls: ['./huis-list.component.css']
})
export class HuisListComponent implements OnInit {
  public filterHuisSoort: string;
  public filterHuis$ = new Subject<string>();
  private _fetchHuizen$: Observable<Huis[]>;
  public errorMessage: string = '';

  constructor(private _huisDataService: HuisDataService){
    this.filterHuis$
    .pipe(
      distinctUntilChanged(),
      debounceTime(200),
      map(val => val.toLowerCase())
    )
    .subscribe(val => (this.filterHuisSoort = val));
  }
  ngOnInit(): void {
    this._fetchHuizen$ = this._huisDataService.huizen$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    )
  }

  get huizen$() : Observable< Huis[] >{
    return this._fetchHuizen$;
  }

  addNewHuis(huis) {
    this._huisDataService.addNewHuis(huis);
  }

  applyFilter(filter: string){
    this.filterHuisSoort = filter;
  }
}
