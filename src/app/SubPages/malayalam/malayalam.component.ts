import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/news.service';
@Component({
  selector: 'app-malayalam',
  templateUrl: './malayalam.component.html',
  styleUrls: ['./malayalam.component.css']
})
export class MalayalamComponent {

  constructor(private  e: NewsService,private router:Router) {}
  malayalam= this.e.getDatas();
  gotohere(lang:any,head:any ){
    localStorage.setItem('head',head)
    localStorage.setItem('lang',lang)
    this.router.navigate(['/single'])

  }

}
