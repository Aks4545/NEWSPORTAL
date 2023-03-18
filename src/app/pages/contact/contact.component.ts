import { Component } from '@angular/core';
import { Firestore,collection } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name:string='';
  email:string='';
  phone:string='';
  subject:string='';
  message:string='';
  contactdata:any
  constructor(public auth:AuthService,private fire:Firestore ){}


  submit(){
    const data = {
     name:this.name,
     email:this.email,
     phone:this.phone,
     subject:this.subject,
     message:this.message
     }

    console.log(data);
   const docRef = collection(this.fire,"contactdata")
   this.auth.insertData(docRef,data)
   this.name='';
   this.email='';
   this.phone='';
   this.subject='';
   this.message='';
  }

}

