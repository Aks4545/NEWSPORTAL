import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/news.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent {
  constructor(private  f: NewsService,private router:Router) {}
  tech= this.f.getData4();
  gotohere(lang:any,head:any ){
    localStorage.setItem('lang',lang)
    localStorage.setItem('head',head)
    this.router.navigate(['/single'])
  }
}
