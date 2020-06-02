import { Component, OnInit, Input } from '@angular/core';
import { Locatie } from './locatie.model';

@Component({
  selector: 'app-locatie',
  templateUrl: './locatie.component.html',
  styleUrls: ['./locatie.component.css']
})
export class LocatieComponent implements OnInit {
  @Input() locatie: Locatie;
  @Input() fullLocatie: string;

  constructor() { }

  ngOnInit(): void {
  }
}
