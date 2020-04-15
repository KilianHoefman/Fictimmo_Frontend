import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HuisComponent } from './huis/huis.component';
import { DetailComponent } from './detail/detail.component';
import { LocatieComponent } from './locatie/locatie.component';
import { ImmoBureauComponent } from './immo-bureau/immo-bureau.component';
import { KlantComponent } from './klant/klant.component';
import { MaterialModule } from './material/material.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HuisComponent,
    DetailComponent,
    LocatieComponent,
    ImmoBureauComponent,
    KlantComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
