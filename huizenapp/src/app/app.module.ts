import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KlantComponent } from './klant/klant.component';
import { MaterialModule } from './material/material.module';
import { UserModule } from './user/user.module';
import { HuisModule } from './huis/huis.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './interceptors';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapsAPILoader} from '@agm/core';
import { AboutPageComponent } from './huis/about-page/about-page.component';



@NgModule({
  declarations: [
    AppComponent,
    KlantComponent,
    PageNotFoundComponent,
    MainNavComponent,
    AboutPageComponent
    ],
  imports: [
    BrowserModule,
    MaterialModule,
    UserModule,
    HuisModule,
    AgmCoreModule.forRoot(),
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
