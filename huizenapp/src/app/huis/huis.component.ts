import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-huis',
  templateUrl: './huis.component.html',
  styleUrls: ['./huis.component.css']
})
export class HuisComponent implements OnInit {  
  @Input() price : BigInteger;
  @Input() korteBeschrijving : string;
  @Input() type : string;
  constructor() { }

  ngOnInit(): void {
  }

}
