import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HuisDataService } from '../huis/huis-data.service';
import { Huis } from '../huis/huis.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/user/authentication.service';


@Component({
  selector: 'app-huis-detail',
  templateUrl: './huis-detail.component.html',
  styleUrls: ['./huis-detail.component.css']
})
export class HuisDetailComponent implements OnInit {
  public huis: Huis;
  private _ingelogd: boolean = false;

  constructor(private route: ActivatedRoute,
    private _huisDataService: HuisDataService,
    private _snackBar: MatSnackBar, 
    private _authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.route.data.subscribe(item => 
      this.huis = item['huis']);      
  }

  checkLogin() : boolean{
    if(this._authentication.user$.getValue()){
      this._ingelogd = true;
    }
    return this._ingelogd;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  deleteHuis(){
    let soort : string = this.huis.soort.toUpperCase();
    this._huisDataService.deleteHuis(this.huis)
    this.openSnackBar(`${soort} SUCCESVOL VERWIJDERD`, 'OK');
  }

}
