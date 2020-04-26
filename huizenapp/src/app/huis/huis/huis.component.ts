import { Component, OnInit, Input } from '@angular/core';
import { Huis } from './huis.model';
import { Detail } from 'src/app/detail/detail.model';

@Component({
  selector: 'app-huis',
  templateUrl: './huis.component.html',
  styleUrls: ['./huis.component.css']
})
export class HuisComponent implements OnInit {  
  @Input() public huis: Huis;
  @Input() public detail: Detail;
  // @Input() price : number = 3456789;
  // @Input() korteBeschrijving : string = "Huis met 4 slaapkamers";
  // @Input() type : string;
  // @Input() soort : string = "huis";
  constructor() {}

  ngOnInit(): void {
  }

}
