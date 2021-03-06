import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Huis } from '../huis/huis.model';
import { Locatie } from '../locatie/locatie.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HuisDataService } from '../huis/huis-data.service';
import { Observable } from 'rxjs';
import { ImmoBureau } from '../immo-bureau/immo-bureau.model';
import { ImmoBureauDataService } from '../immo-bureau/immo-bureau-data.service';
import { Detail } from '../detail/detail.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-huis',
  templateUrl: './add-huis.component.html',
  styleUrls: ['./add-huis.component.css']
})
  
export class AddHuisComponent implements OnInit {
  private _fetchBureaus$: Observable<ImmoBureau[]>;
  public locatie: FormGroup;
  public detail: FormGroup;
  public huis: FormGroup;
  private _latitude: number = 0;
  private _longitude: number = 0;
  

  constructor(private fb: FormBuilder, private _huisDataService: HuisDataService, private bds: ImmoBureauDataService,
    private _router: Router, private _snackbar: MatSnackBar) { 
  }

  public readonly types = ['Koop', 'Huur'];
  public readonly soorten = ['Huis', 'Appartement', 'Grond'];

  get bureaus$(): Observable<ImmoBureau[]>{
    return this._fetchBureaus$;
  }

  openSnackbar(message: string, action: string){
    this._snackbar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this._fetchBureaus$ = this.bds.immoBureaus$;

    this.locatie = this.fb.group({
      gemeente: ['', [Validators.required, Validators.minLength(2)]],
      huisnummer: ['', [Validators.required, Validators.minLength(1)]],
      postcode: ['', [Validators.required, Validators.min(1000), Validators.max(9999)]],
      straatnaam: ['', [Validators.required, Validators.minLength(3), Validators.max(50)]],
    });

    this.detail = this.fb.group({
      langeBeschrijving: ['', [Validators.required, Validators.minLength(1), Validators.minLength(100)]],
      bewoonbareOppervlakte: ['', [Validators.required, Validators.min(1)]],
      totaleOppervlakte: ['', [Validators.required, Validators.min(1)]],
      epcWaarde: ['', [Validators.required, Validators.min(0), Validators.max(900)]],
      kadastraalInkomen: ['', [Validators.required, Validators.min(1)]]
    });

    this.huis = this.fb.group({
      korteBeschrijving: ['', [Validators.required, Validators.maxLength(150)]],
      price: ['', [Validators.required, Validators.min(1)]],
      type: ['', Validators.required],
      soort: ['', Validators.required],
      immoBureau: ['', Validators.required]
    })    
  }

  onSubmit(){    
    if(
      this._huisDataService.addNewHuis(new Huis(
      new Locatie(this.locatie.value.gemeente, this.locatie.value.straatnaam, this.locatie.value.huisnummer, this.locatie.value.postcode, this._latitude, this._longitude), 
      this.huis.value.korteBeschrijving, 
      this.huis.value.price, 
      new Detail(this.detail.value.langeBeschrijving, this.detail.value.bewoonbareOppervlakte, this.detail.value.totaleOppervlakte, this.detail.value.epcWaarde, this.detail.value.kadastraalInkomen), 
      this.huis.value.type, 
      this.huis.value.soort, 
      this.huis.value.immoBureau)
      ))
      this._router.navigate(['huizen/list']);   
      this.openSnackbar(`${this.huis.value.soort} SUCCESVOL TOEGEVOEGD`, 'OK');
  }

  getErrorMessage(errors: any): string {
     if (errors.required) {
       return 'Veld is verplicht';
     } else if (errors.minlength) {
       return `Veld moet minstens ${errors.minlength.requiredLength} 
         karakters lang zijn (is ${errors.minlength.actualLength})`;    
    }else if(errors.maxLength){
      return `Veld mag maximaal ${errors.maxLength.requiredLength} lang zijn (heeft ${errors.maxLength.actualLength})`
    }
    else if(errors.min){
      return `Veld moet groter zijn dan huidige`
    }     
    else if(errors.max){
      return `Veld moet kleiner zijn dan huidige`
    }
    else if(errors.greaterThan){
      return `Totale opp. moest minstens bewoonbare opp. zijn`;
    }
    else if(errors.totaalError){
      return 'Totale opp. moet minstens gelijk zijn aan bewoonbare opp.'
    }
  }
}

function forbiddenNumberValidator(control: FormGroup)
  : { [key: string]: any } {
    const bewoonbaar = control.get('bewoonbareOppervlakte');
    const totaal = control.get('totaleOppervlakte');
  
    return bewoonbaar && totaal && bewoonbaar > totaal ? {'totaalError': true} : null;
}
// function greaterThanValidator(control: FormGroup) : { [key: string] : any } {
//   if(control.get('totaleOppervlakte').value < control.get('bewoonbareOppervlakte').value){
//     return {greaterThan: true};
//   }
//   return null;
// }