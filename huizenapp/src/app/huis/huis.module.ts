import { MaterialModule } from './../material/material.module';
import {  HuisComponent  } from './huis/huis.component';
import { LocatieComponent } from './locatie/locatie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HuisComponent, LocatieComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [HuisComponent]
})
export class HuisModule { }
