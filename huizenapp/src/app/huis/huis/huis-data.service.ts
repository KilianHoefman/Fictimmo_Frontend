import { Injectable } from '@angular/core';
import { HUIZEN } from './mock-huis';
import { Huis } from './huis.model';

@Injectable({
  providedIn: 'root'
})
export class HuisDataService {
  private _huizen = HUIZEN;

  constructor() { }

  get huizen(){
    return this._huizen;
  }

  addNewHuis(huis: Huis){
    this._huizen.push(huis);
  }
}
