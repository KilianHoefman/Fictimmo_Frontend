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
import { MainNavComponent } from '../main-nav/main-nav.component';
import { HuisDetailComponent } from './huis-detail/huis-detail.component';



@NgModule({
  declarations: [HuisComponent, LocatieComponent, HuisListComponent, HuisFilterPipe, AddHuisComponent, HuisDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [HuisListComponent]
})
export class HuisModule { }
