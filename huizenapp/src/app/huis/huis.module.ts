import { MaterialModule } from './../material/material.module';
import {  HuisComponent  } from './huis/huis.component';
import { LocatieComponent } from './locatie/locatie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HuisListComponent } from './huis-list/huis-list.component';
import { AddHuisComponent } from './add-huis/add-huis.component';
import { HuisFilterPipe } from './huis/huis-filter.pipe';


@NgModule({
  declarations: [HuisComponent, LocatieComponent, HuisListComponent, AddHuisComponent, HuisFilterPipe],
  imports: [
    CommonModule,
    HttpClientModule,
     MaterialModule
  ],
  exports: [HuisListComponent]
})
export class HuisModule { }
