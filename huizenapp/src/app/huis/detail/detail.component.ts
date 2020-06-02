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

  constructor() { }

  ngOnInit(): void {
  }

}
