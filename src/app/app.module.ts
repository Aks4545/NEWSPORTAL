import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
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
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
 {provide: FIREBASE_OPTIONS,useValue: environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
