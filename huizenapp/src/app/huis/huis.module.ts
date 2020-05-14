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
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ImmoBureauComponent } from './immo-bureau/immo-bureau.component';
import { HuisResolver } from './huis/HuisResolver';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AboutPageComponent } from './about-page/about-page.component';

 const routes: Routes = [
  {path: 'huizen/list', component: HuisListComponent},
  {path: 'huizen/add', component: AddHuisComponent},
  {path: 'huizen/about', component: AboutPageComponent},
  {path: 'huizen/detail/:id', component: HuisDetailComponent, resolve: {huis: HuisResolver}},
 ]

@NgModule({
  declarations: [HuisComponent, LocatieComponent, HuisListComponent, HuisFilterPipe, AddHuisComponent, HuisDetailComponent, DetailComponent, ImmoBureauComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule,
    RouterModule.forChild(routes)
  ],
  providers: [GoogleMapsAPIWrapper],
  exports: [HuisListComponent]
})
export class HuisModule { }
