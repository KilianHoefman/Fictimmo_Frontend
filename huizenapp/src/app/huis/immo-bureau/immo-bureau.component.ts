import { Component, OnInit, Input } from '@angular/core';
import { ImmoBureau } from './immo-bureau.model';

@Component({
  selector: 'app-immo-bureau',
  templateUrl: './immo-bureau.component.html',
  styleUrls: ['./immo-bureau.component.css']
})
export class ImmoBureauComponent implements OnInit {
  @Input() public immoBureau: ImmoBureau;

  constructor() { }

  ngOnInit(): void {
  }
  

}
