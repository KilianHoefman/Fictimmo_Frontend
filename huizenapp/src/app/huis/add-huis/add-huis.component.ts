import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { Huis } from '../huis/huis.model';
import { Locatie } from '../locatie/locatie.model';
import { Detail } from 'src/app/detail/detail.model';
import { ImmoBureau } from 'src/app/immo-bureau/immo-bureau.model';
import { HuisDataService } from '../huis/huis-data.service';
import { ImmoBureauDataService } from 'src/app/immo-bureau/immo-bureau-data.service';
import { Observable } from 'rxjs';

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
  

  constructor(private fb: FormBuilder, private hds: HuisDataService, private bds: ImmoBureauDataService) { 
  }

  public readonly types = ['Koop', 'Huur'];
  public readonly soorten = ['Huis', 'Appartement', 'Grond'];

  get bureaus$(): Observable<ImmoBureau[]>{
    return this._fetchBureaus$;
  }

  ngOnInit(): void {
    this._fetchBureaus$ = this.bds.immoBureaus$;

    this.locatie = this.fb.group({
      gemeente: ['', [Validators.required, Validators.minLength(2)]],
      huisnummer: ['', [Validators.required, Validators.minLength(1)]],
      postcode: ['', [Validators.required, , Validators.max(9999), Validators.min(1000)]],
      straatnaam: ['', Validators.required, Validators.minLength(3)]
    });

    this.detail = this.fb.group({
      langeBeschrijving: ['', Validators.required, Validators.minLength(30)],
      bewoonbareOppervlakte: ['', Validators.required, Validators.min(15)],
      totaleOppervlakte: ['', Validators.required, Validators.min(20), [greaterThanValidator]],
      epcWaarde: ['', Validators.required, Validators.min(0), Validators.max(700)],
      kadastraalInkomen: ['', Validators.required, Validators.min(100)]
    });

    this.huis = this.fb.group({
      korteBeschrijving: ['', Validators.required, Validators.minLength(10), Validators.maxLength(200)],
      price: ['', Validators.required],
      type: ['', Validators.required],
      soort: ['', Validators.required],
      immoBureau: ['', Validators.required]
    })    
  }



  onSubmit(){    
      this.hds.addNewHuis(new Huis(
      new Locatie(this.locatie.value.gemeente, this.locatie.value.straatnaam, this.locatie.value.huisnummer, this.locatie.value.postcode), 
      this.huis.value.korteBeschrijving, 
      this.huis.value.price, 
      new Detail(this.detail.value.langeBeschrijving, this.detail.value.bewoonbareOppervlakte, this.detail.value.totaleOppervlakte, this.detail.value.epcWaarde, this.detail.value.kadastraalInkomen), 
      this.huis.value.type, 
      this.huis.value.soort, 
      this.huis.value.immoBureau)
    );
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
  }
}

function greaterThanValidator(control: FormGroup) : { [key: string] : any } {
  if(control.get('totaleOppervlakte').value < control.get('bewoonbareOppervlakte').value){
    return {greaterThan: true};
  }
  return null;
}