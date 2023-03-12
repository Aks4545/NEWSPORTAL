import { Component } from '@angular/core';
import { NewsService } from 'src/app/news.service';
@Component({
  selector: 'app-single-home',
  templateUrl: './single-home.component.html',
  styleUrls: ['./single-home.component.css']
})
export class SingleHomeComponent {

  single:any
  constructor(private h:NewsService){}
  ngOnInit(){
    let homeCardId=localStorage.getItem('homeCardId')
    this.single=this.h.getHomeCard().filter(data=>data.id===homeCardId)
    console.log(this.single[0]);
  }

}





