import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SingleComponent } from './pages/single/single.component';
import { MalayalamComponent } from './SubPages/malayalam/malayalam.component';
import { TelunguComponent } from './SubPages/telungu/telungu.component';
import { HindiComponent } from './SubPages/hindi/hindi.component';
import { TamilComponent } from './SubPages/tamil/tamil.component';
import { TechComponent } from './SubPages/tech/tech.component';
import { BusinessComponent } from './SubPages/business/business.component';
import { EntertainmentComponent } from './SubPages/entertainment/entertainment.component';
import { SportsComponent } from './SubPages/sports/sports.component';
import { InternationalComponent } from './SubPages/international/international.component';
import { SingleHomeComponent } from './pages/single-home/single-home.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    ContactComponent,
    SingleComponent,
    MalayalamComponent,
    TelunguComponent,
    HindiComponent,
    TamilComponent,
    TechComponent,
    BusinessComponent,
    EntertainmentComponent,
    SportsComponent,
    InternationalComponent,
    SingleHomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
