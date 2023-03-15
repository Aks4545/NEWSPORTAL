import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BusinessComponent } from './SubPages/business/business.component';
import { EntertainmentComponent } from './SubPages/entertainment/entertainment.component';
import { HindiComponent } from './SubPages/hindi/hindi.component';
import { InternationalComponent } from './SubPages/international/international.component';
import { MalayalamComponent } from './SubPages/malayalam/malayalam.component';
import { SingleComponent } from './pages/single/single.component';
import { SportsComponent } from './SubPages/sports/sports.component';
import { TamilComponent } from './SubPages/tamil/tamil.component';
import { TechComponent } from './SubPages/tech/tech.component';
import { TelunguComponent } from './SubPages/telungu/telungu.component';
import { SingleHomeComponent } from './pages/single-home/single-home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
    },
    {
    path:'home',
    component:HomeComponent
    },
    {
    path:'login',
    component:LoginComponent
    },
    {
    path:'register',
    component:RegisterComponent
    },
    {
    path:'contact',
    component:ContactComponent
    },

    {
    path:'business',
    component:BusinessComponent
    },
    {
    path:'entertainment',
    component:EntertainmentComponent
    },
    {
    path:'hindi',
    component:HindiComponent
    },
    {
    path:'international',
    component:InternationalComponent
    },
    {
      path:'malayalam',
      component:MalayalamComponent
    },
    {
      path:'sports',
      component:SportsComponent
    },
    {
      path:'tamil',
      component:TamilComponent
    },
    {
      path:'tech',
      component:TechComponent
    },
    {
      path:'telungu',
      component:TelunguComponent
    },

    {
      path:'single',
      component:SingleComponent
    },
    {
      path:'singleHome',
      component:SingleHomeComponent
    },

  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
