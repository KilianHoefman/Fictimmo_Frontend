import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ImmoBureauComponent } from './immo-bureau/immo-bureau.component';
import { KlantComponent } from './klant/klant.component';
import { MaterialModule } from './material/material.module';
import { UserModule } from './user/user.module';
import { HuisModule } from './huis/huis.module';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ImmoBureauComponent,
    KlantComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    UserModule,
    HuisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
