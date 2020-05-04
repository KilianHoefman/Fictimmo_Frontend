import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HuisListComponent } from './huis/huis-list/huis-list.component';
import { AddHuisComponent } from './huis/add-huis/add-huis.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { HuisDetailComponent } from './huis/huis-detail/huis-detail.component';
import { HuisResolver } from './huis/huis/HuisResolver';
import { AuthGuard } from './user/auth.guard';

const appRoutes: Routes = [
  {
    path: 'huis',
    canActivate: [ AuthGuard ],
    loadChildren: '../huis/huis.module'
  },
  {path: '', redirectTo: 'huizen/list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
