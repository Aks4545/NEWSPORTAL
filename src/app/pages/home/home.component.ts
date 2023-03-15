import { Component } from '@angular/core';
import { NewsService } from 'src/app/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  home:any
car:any
h1:any
  x: any;
    constructor(private  d: NewsService,private router:Router) {}

  ngOnInit(){
  this.home=this.d.getHomeCard()
  this.car=this.d.getData8()
this.h1=this.d.geth1()
  }

    database= this.d.getData();
    gotohere(lang:any,head:any ){
      localStorage.setItem('head',head)
      localStorage.setItem('lang',lang)
      this.router.navigate(['/single'])
    }
    gotoSingle(lang:any,id:any){
  localStorage.setItem('homeCardId',id)
  localStorage.setItem('lang',lang)

  this.router.navigate(['\singleHome'])
  // localStorage.setItem('carouseldata',id)
  // this.router.navigate(['\single'])
    }


gotocar(lang:any,head:any ){
  localStorage.setItem('head',head)
  localStorage.setItem('lang',lang)
  this.router.navigate(['/singleHome'])

}
gotosinh(lang:any,head:any ){
  localStorage.setItem('head',head)
  localStorage.setItem('lang',lang)
  this.router.navigate(['/singleHome'])

}

  }


