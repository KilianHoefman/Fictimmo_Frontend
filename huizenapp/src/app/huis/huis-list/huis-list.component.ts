import { Component, OnInit } from '@angular/core';
import { Huis } from '../huis/huis.model';
import { HuisDataService } from '../huis/huis-data.service';
import { Subject } from 'rxjs';
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

  constructor(private _huisDataService: HuisDataService){
    this.filterHuis$
    .pipe(
      distinctUntilChanged(),
      debounceTime(200),
      map(val => val.toLowerCase())
    )
    .subscribe(val => (this.filterHuisSoort = val));
  }

  get huizen() : Huis[] {
    return this._huisDataService.huizen;
  }

  addNewHuis(huis) {
    this._huisDataService.addNewHuis(huis);
  }

  applyFilter(filter: string){
    this.filterHuisSoort = filter;
  }
}
