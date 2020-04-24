import { MaterialModule } from './../material/material.module';
import {  HuisComponent  } from './huis/huis.component';
import { LocatieComponent } from './locatie/locatie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HuisComponent, LocatieComponent],
  imports: [
    CommonModule,
    HttpClientModule,
     MaterialModule
  ],
  exports: [HuisComponent]
})
export class HuisModule { }
