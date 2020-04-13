import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HuisComponent } from './huis/huis.component';
import { DetailComponent } from './detail/detail.component';
import { LocatieComponent } from './locatie/locatie.component';
import { ImmoBureauComponent } from './immo-bureau/immo-bureau.component';

@NgModule({
  declarations: [
    AppComponent,
    HuisComponent,
    DetailComponent,
    LocatieComponent,
    ImmoBureauComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
