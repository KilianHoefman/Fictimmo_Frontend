import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-locatie',
  templateUrl: './locatie.component.html',
  styleUrls: ['./locatie.component.css']
})
export class LocatieComponent implements OnInit {
  @Input() public name : string = "locatieHuis";
  constructor() { }

  ngOnInit(): void {
  }

}
