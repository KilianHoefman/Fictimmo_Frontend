import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-immo-bureau',
  templateUrl: './immo-bureau.component.html',
  styleUrls: ['./immo-bureau.component.css']
})
export class ImmoBureauComponent implements OnInit {
  @Input() public naam : string;
  constructor() { }

  ngOnInit(): void {
  }

}
