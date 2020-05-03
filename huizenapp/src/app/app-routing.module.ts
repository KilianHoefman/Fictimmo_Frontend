import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HuisListComponent } from './huis/huis-list/huis-list.component';
import { AddHuisComponent } from './huis/add-huis/add-huis.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { HuisDetailComponent } from './huis/huis-detail/huis-detail.component';
import { HuisResolver } from './huis/huis/HuisResolver';

const appRoutes: Routes = [
  {path: 'huizen/list', component: HuisListComponent},
  {path: 'huizen/add', component: AddHuisComponent},
  {path: 'huizen/detail/:id', component: HuisDetailComponent, resolve: {huis: HuisResolver}},
  {path: '', redirectTo: 'huizen/list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
