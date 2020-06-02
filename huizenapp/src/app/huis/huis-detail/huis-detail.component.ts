import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HuisDataService } from '../huis/huis-data.service';
import { Huis } from '../huis/huis.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-huis-detail',
  templateUrl: './huis-detail.component.html',
  styleUrls: ['./huis-detail.component.css']
})
export class HuisDetailComponent implements OnInit {
  public huis: Huis;

  constructor(private route: ActivatedRoute,
    private _huisDataService: HuisDataService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.data.subscribe(item => 
      this.huis = item['huis']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  deleteHuis(){
    let soort : string = this.huis.soort.toUpperCase();
    if(this._huisDataService.deleteHuis(this.huis)){
      this.openSnackBar(`${soort} SUCCESVOL VERWIJDERD`, 'OK');
    }else{
    this.openSnackBar(`${soort} NIET VERWIJDERD`, 'OK');
    }
  }

}
