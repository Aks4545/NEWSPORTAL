import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/news.service';
@Component({
  selector: 'app-tamil',
  templateUrl: './tamil.component.html',
  styleUrls: ['./tamil.component.css']
})
export class TamilComponent {

  constructor(private  f: NewsService, private router:Router) {}
  tamil= this.f.getData1();
  gotohere(lang:any,head:any ){
    localStorage.setItem('lang',lang)
    localStorage.setItem('head',head)
    this.router.navigate(['/single'])
  }

}
