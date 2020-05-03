import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ImmoBureauComponent } from './immo-bureau/immo-bureau.component';
import { KlantComponent } from './klant/klant.component';
import { MaterialModule } from './material/material.module';
import { UserModule } from './user/user.module';
import { HuisModule } from './huis/huis.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ImmoBureauComponent,
    KlantComponent,
    PageNotFoundComponent,
    MainNavComponent
    ],
  imports: [
    BrowserModule,
    MaterialModule,
    UserModule,
    HuisModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
