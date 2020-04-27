import { Component, OnInit } from '@angular/core';
import { Huis } from '../huis/huis.model';
import { HuisDataService } from '../huis/huis-data.service';
import { Subject, Observable } from 'rxjs';
 import {
   distinctUntilChanged,
   debounceTime,
   map,
   filter
 } from 'rxjs/operators';

@Component({
  selector: 'app-huis-list',
  templateUrl: './huis-list.component.html',
  styleUrls: ['./huis-list.component.css']
})
export class HuisListComponent{
  public filterHuisSoort: string;
  public filterHuis$ = new Subject<string>();
  private _fetchHuizen$: Observable<Huis[]> = this._huisDataService.huizen$;

  constructor(private _huisDataService: HuisDataService){
    this.filterHuis$
    .pipe(
      distinctUntilChanged(),
      debounceTime(200),
      map(val => val.toLowerCase())
    )
    .subscribe(val => (this.filterHuisSoort = val));
  }

  get huizen$() : Observable< Huis[] >{
    return this._fetchHuizen$;
  }

  // addNewHuis(huis) {
  //   this._huisDataService.addNewHuis(huis);
  // }

  applyFilter(filter: string){
    this.filterHuisSoort = filter;
  }
}
