import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/news.service';
@Component({
  selector: 'app-telungu',
  templateUrl: './telungu.component.html',
  styleUrls: ['./telungu.component.css']
})
export class TelunguComponent {
  constructor(private  f: NewsService,private router:Router) {}
  telungu= this.f.getData2();

  gotohere(lang:any,head:any ){
    localStorage.setItem('lang',lang)
    localStorage.setItem('head',head)
    this.router.navigate(['/single'])

}
}
