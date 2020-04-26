import { Component, OnInit } from '@angular/core';
import { HUIZEN } from '../huis/mock-huis';

@Component({
  selector: 'app-huis-list',
  templateUrl: './huis-list.component.html',
  styleUrls: ['./huis-list.component.css']
})
export class HuisListComponent{
  private _huizen = HUIZEN;

  constructor() { }

  get huizen(){
    return this._huizen;
  }
}
