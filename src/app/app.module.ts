import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HelpComponent } from './components/help/help.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { OffersComponent } from './components/offers/offers.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CompareComponent } from './components/compare/compare.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HelpComponent,
    MainComponent,
    OffersComponent,
    ContactusComponent,
    CompareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
