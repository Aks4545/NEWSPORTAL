import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/news.service';
@Component({
  selector: 'app-singleh',
  templateUrl: './singleh.component.html',
  styleUrls: ['./singleh.component.css']
})
export class SinglehComponent {
  home:any

  single:any
  constructor(private h:NewsService,private router:Router){}

  ngOnInit(){
    this.home=this.h.getHomeCard()

    let singleho=localStorage.getItem('singleho')
    this.single=this.h.getHomeCard().filter(data=>data.id===singleho)
    console.log(this.single[0]);
  }



}
