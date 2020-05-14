import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
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
