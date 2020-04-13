import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-locatie',
  templateUrl: './locatie.component.html',
  styleUrls: ['./locatie.component.css']
})
export class LocatieComponent implements OnInit {
  @Input() public gemeente : string = "gemeente";
  @Input() public straatnaam : string = "straatnaam";
  @Input() public huisnummer : string = "huisnummer";
  @Input() public postcode : number = 9000;
  constructor() { }

  ngOnInit(): void {
  }

}
