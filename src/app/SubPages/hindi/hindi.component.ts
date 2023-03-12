import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.css']
})
export class HindiComponent {

  constructor(private  f: NewsService,private router:Router) {}
  hindi= this.f.getDatass();
  gotohere(lang:any,head:any ){
    localStorage.setItem('lang',lang)
    localStorage.setItem('head',head)
    this.router.navigate(['/single'])
  }

}
