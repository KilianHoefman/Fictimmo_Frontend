import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-klant',
  templateUrl: './klant.component.html',
  styleUrls: ['./klant.component.css']
})
export class KlantComponent implements OnInit {
  @Input() public voornaam : string;
  @Input() public achternaam : string;
  @Input() public geboorteDatum : Date;
  @Input() public email : string;
  @Input() public telefoonNummer : string;
  constructor() { }

  ngOnInit(): void {
  }

}
