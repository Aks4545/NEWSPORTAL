import { Component } from '@angular/core';
import { NewsService } from 'src/app/news.service';
@Component({
  selector: 'app-singleh',
  templateUrl: './singleh.component.html',
  styleUrls: ['./singleh.component.css']
})
export class SinglehComponent {
  single:any
  constructor(private h:NewsService){}
  ngOnInit(){
    let singleho=localStorage.getItem('singleho')
    this.single=this.h.getHomeCard().filter(data=>data.id===singleho)
    console.log(this.single[0]);
  }

}
