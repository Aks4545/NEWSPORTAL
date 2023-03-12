import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/news.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  constructor(private  f: NewsService,private router:Router) {}
  sports= this.f.getData3();

  gotohere(lang:any,head:any ){
    localStorage.setItem('lang',lang)
    localStorage.setItem('head',head)
    this.router.navigate(['/single'])

}
}
