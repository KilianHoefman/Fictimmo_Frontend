import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HuisListComponent } from './huis/huis-list/huis-list.component';
import { AddHuisComponent } from './huis/add-huis/add-huis.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: 'huizen/list', component: HuisListComponent},
  {path: 'huizen/add', component: AddHuisComponent},
  {path: '', redirectTo: 'huizen/list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
