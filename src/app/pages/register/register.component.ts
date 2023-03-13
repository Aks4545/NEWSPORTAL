import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

email:string='';
password:string='';
username:string='';
phone:string='';
 constructor(private auth:AuthService,private router:Router){}


ngOnInit(): void {

}


registerUser(){
if(this.email == ''){
  alert('please enter email');
  return;
}
if(this.password==''){
alert('please enter password');
return;
}
if(this.username==''){
  alert('please enter username');
  return;
  }
  if(this.phone==''){
    alert('please enter phone');
    return;
    }
this.auth.register(this.email,this.password,this.phone,this.username)
this.email='';
this.password='';
this.username='';
this.phone='';


 }
gotologin(){
this.router.navigate(['login'])
}

}
