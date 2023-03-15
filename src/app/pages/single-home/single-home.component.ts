import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/news.service';
@Component({
  selector: 'app-single-home',
  templateUrl: './single-home.component.html',
  styleUrls: ['./single-home.component.css']
})
export class SingleHomeComponent {
home:any
home1:any
sp:any
cr:any

  single:any
  constructor(private h:NewsService,private router:Router){}
  ngOnInit(){
    this.home=this.h.getHomeCard()
this.home1=this.h.getData()
this.sp=this.h.getsingleHome()
this.cr=this.h.getData8()


let head:any=localStorage.getItem('head');
    let lang:any=localStorage.getItem('lang');
    let homeCardId=localStorage.getItem('homeCardId')
    console.log(head);

if(lang==='single'){

this.single=this.h.getHomeCard().filter(data=>data.id===homeCardId)

}
else if(lang==='h1'){
  this.single=this.h.getsingleHome().filter(data=>data.head===head)

}
else if(lang==='car'){
  this.single=this.h.getData8().filter(data=>data.head===head)

}
else if(lang==='home2'){
  this.single=this.h.geth1().filter(data=>data.head===head)

}



    console.log(this.single[0]);
  }
  gotosin(lang:any,head:any ){
    localStorage.setItem('lang',lang)
    localStorage.setItem('head',head)
    this.router.navigate(['/single'])
  }

  gotosp(){
    this.router.navigate(['/sports'])
    }
    gototech(){
      this.router.navigate(['/tech'])
      }
    gotoint(){
        this.router.navigate(['/international'])
    }
    gotoent(){
      this.router.navigate(['/entertainment'])
    }
    gotobus(){
      this.router.navigate(['/business'])
    }

}





