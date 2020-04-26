import { Component, OnInit } from '@angular/core';
import { HUIZEN } from '../huis/mock-huis';
import { Huis } from '../huis/huis.model';
import { HuisDataService } from '../huis/huis-data.service';

@Component({
  selector: 'app-huis-list',
  templateUrl: './huis-list.component.html',
  styleUrls: ['./huis-list.component.css']
})
export class HuisListComponent{
  constructor(private _huisDataService: HuisDataService) {}

  get huizen() : Huis[] {
    return this._huisDataService.huizen;
  }

  addNewHuis(huis) {
    this._huisDataService.addNewHuis(huis);
  }
}
