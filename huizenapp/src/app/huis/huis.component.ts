import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-huis',
  templateUrl: './huis.component.html',
  styleUrls: ['./huis.component.css']
})
export class HuisComponent implements OnInit {  
  @Input() price : number = 3456789;
  @Input() korteBeschrijving : string = "Huis met 4 slaapkamers";
  @Input() type : string;
  @Input() soort : string = "huis";
  constructor() {}

  ngOnInit(): void {
  }

}
