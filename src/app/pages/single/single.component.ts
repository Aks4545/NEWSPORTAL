import { Component } from '@angular/core';
import { NewsService } from 'src/app/news.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  single:any
  constructor(private x:NewsService){}


  ngOnInit(){
    let head:any=localStorage.getItem('head');
    let lang:any=localStorage.getItem('lang');


    console.log(head);
    if(lang==='hindi')
{
    let ar=this.x.getDatass();

    this.single=ar.filter(e=>e.head===head);
}
else if(lang==='malayalam'){
  let ar=this.x.getDatas();

  this.single=ar.filter(e=>e.head===head);
}
else if(lang==='tamil'){
  let ar=this.x.getData1();

  this.single=ar.filter(e=>e.head===head);
}
else if(lang==='telugu'){
  let ar=this.x.getData2();

  this.single=ar.filter(e=>e.head===head);
}
else if(lang==='sports'){
  let ar=this.x.getData3();

  this.single=ar.filter(e=>e.head===head);
}
else if(lang==='tech'){
  let ar=this.x.getData4();

  this.single=ar.filter(e=>e.head===head);
}
else if(lang==='international'){
  let ar=this.x.getData5();

  this.single=ar.filter(e=>e.head===head);
}
else if(lang==='entertainment'){
  let ar=this.x.getData6();

  this.single=ar.filter(e=>e.head===head);
}
else if(lang==='bussiness'){
  let ar=this.x.getData7();

  this.single=ar.filter(e=>e.head===head);
}
else if(lang==='carousel'){
  let ar=this.x.getData8();

  this.single=ar.filter(e=>e.head===head);
}
else if(lang==='normal'){
  let ar=this.x.getData();
  this.single=ar.filter(e=>e.head===head);
}
    console.log(this.single[0]);




}
}
