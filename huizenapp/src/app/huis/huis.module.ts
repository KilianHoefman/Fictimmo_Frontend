import { MaterialModule } from './../material/material.module';
import {  HuisComponent  } from './huis/huis.component';
import { LocatieComponent } from './locatie/locatie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HuisListComponent } from './huis-list/huis-list.component';
import { HuisFilterPipe } from './huis/huis-filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AddHuisComponent } from './add-huis/add-huis.component';



@NgModule({
  declarations: [HuisComponent, LocatieComponent, HuisListComponent, HuisFilterPipe, AddHuisComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [HuisListComponent]
})
export class HuisModule { }
