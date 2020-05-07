import { Component, OnInit, Input } from '@angular/core';
import { Detail } from './detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() public detail: Detail;
  @Input() public fullDetails: string;

  // @Input() public langeBeschrijving : string;
  // @Input() public bewoonbareOppervlakte : number;
  // @Input() public totaleOppervlakte : number;
  // @Input() public epcWaarde : number;
  // @Input() public kadastraalInkomen : number;

  constructor() { }

  ngOnInit(): void {
  }

}
