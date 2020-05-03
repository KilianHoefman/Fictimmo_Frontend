import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HuisDataService } from '../huis/huis-data.service';
import { Huis } from '../huis/huis.model';

@Component({
  selector: 'app-huis-detail',
  templateUrl: './huis-detail.component.html',
  styleUrls: ['./huis-detail.component.css']
})
export class HuisDetailComponent implements OnInit {
  public huis: Huis;

  constructor(private route: ActivatedRoute,
    private huisDataService: HuisDataService) { }

  ngOnInit(): void {
    this.route.data.subscribe(item => 
      this.huis = item['huis']);
  }

}
