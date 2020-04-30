import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Huis } from '../huis/huis.model';
import { Locatie } from '../locatie/locatie.model';
import { Detail } from 'src/app/detail/detail.model';
import { ImmoBureau } from 'src/app/immo-bureau/immo-bureau.model';
import { HuisDataService } from '../huis/huis-data.service';
import { ImmoBureauDataService } from 'src/app/immo-bureau/immo-bureau-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  @Output() public newHuis = new EventEmitter<Huis>();

  constructor(private fb: FormBuilder, private hds: HuisDataService, private bds: ImmoBureauDataService) { 
  }

  // createLocatie(): FormGroup {
  //   return this.fb.group({
  //     gemeente: [''],
  //     huisnummer: [''],
  //     postcode: [''],
  //     straatnaam: ['']
  //   })
  // }

  // createDetail(): FormGroup {
  //   return this.fb.group({
  //     langeBeschrijving: [''],
  //     bewoonbareOppervlakte: [''],
  //     totaleOppervlakte: [''],
  //     epcWaarde: [''],
  //     kadastraalInkomen: ['']
  //   })
  // }

  get bureaus$(): Observable<ImmoBureau[]>{
    return this._fetchBureaus$;
  }

  ngOnInit(): void {
    this._fetchBureaus$ = this.bds.immoBureaus$;
    this.locatie = this.fb.group({
      gemeente: [''],
      huisnummer: [''],
      postcode: [''],
      straatnaam: ['']
    });
    this.detail = this.fb.group({
      langeBeschrijving: [''],
      bewoonbareOppervlakte: [''],
      totaleOppervlakte: [''],
      epcWaarde: [''],
      kadastraalInkomen: ['']
    })
    this.huis = this.fb.group({
      korteBeschrijving: [''],
      price: [''],
      type: [''],
      soort: [''],
      immoBureau: ['']
    })    
  }

  onSubmit(){
    //temporarily making a full object instead of the type which is created by the user through html    
    const locatie = new Locatie('Merelbeke','Sint-elooistraat', '75', 9820);    
    const detail = new Detail('lange beschrijving', 500, 800, 230, 1200); 

    console.log(this.huis.value)
    this.hds.addNewHuis(new Huis(
      new Locatie(this.locatie.value.gemeente, this.locatie.value.straatnaam, this.locatie.value.huisnummer, this.locatie.value.postcode), 
      this.huis.value.korteBeschrijving, 
      this.huis.value.price, 
      new Detail(this.detail.value.langeBeschrijving, this.detail.value.bewoonbareOppervlakte, this.detail.value.totaleOppervlakte, this.detail.value.epcWaarde, this.detail.value.kadastraalInkomen), 
      this.huis.value.type, 
      this.huis.value.soort, 
      new ImmoBureau(this.huis.value.immoBureau))
    );

    // this.hds.addNewHuis(new Huis(
    //   new Locatie(this.locatie.value.gemeente, this.locatie.value.huisnummer, this.locatie.value.postcode, this.locatie.value.straatnaam), 
    //   this.huis.value.korteBeschrijving, 
    //   this.huis.value.price, 
    //   new Detail(this.detail.value.langeBeschrijving, this.detail.value.bewoonbareOppervlakte, this.detail.value.totaleOppervlakte, this.detail.value.epcWaarde, this.detail.value.kadastraalInkomen), 
    //   this.huis.value.type, this.huis.value.soort, immoBureau))
      //new ImmoBureau(this.huis.value.immoBureau)));
    // this.newHuis.emit(new Huis(locatie, 'Korte', 0, detail, 'Koop', this.huis.value.name, immoBureau))
  }
}
