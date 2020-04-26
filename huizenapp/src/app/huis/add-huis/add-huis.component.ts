import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Huis } from '../huis/huis.model';
import { Locatie } from '../locatie/locatie.model';
import { Detail } from 'src/app/detail/detail.model';
import { ImmoBureau } from 'src/app/immo-bureau/immo-bureau.model';

@Component({
  selector: 'app-add-huis',
  templateUrl: './add-huis.component.html',
  styleUrls: ['./add-huis.component.css']
})
export class AddHuisComponent implements OnInit {
  @Output() public newHuis = new EventEmitter<Huis>();
  constructor() { }

  ngOnInit(): void {
  }

  addHuis(newhuistype: HTMLInputElement): boolean {    
    //temporarily making a full object instead of the type which is created by the user through html
    console.log(newhuistype.value);
    const locatie = new Locatie('Merelbeke', 'Sint-elooistraat', '73', 9820);    
    const detail = new Detail('lange beschrijving', 500, 800, 230, 1200);
    let huizen:Huis[] = new Array();
    const immoBureau = new ImmoBureau('Nobels', huizen);
    console.log(locatie, detail, immoBureau);
    const huis = new Huis(locatie, 'Korte', 0, detail, 'Koop', newhuistype.value,immoBureau);
    this.newHuis.emit(huis);
    return false;
  }

}
